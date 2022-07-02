require("dotenv").config()
const express = require('express')
const ethers = require('ethers');
const App = express();
const path = require('path')
const port = 5000
App.use(express.static('public'))
let x = 0;
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/7cedc93bca594509a5abbaae985320a6')


App.get('/metadata', async (req, res)=>{
    //console.log('req is defined',req)
    let query = req.query
    console.log('query is',query)
    let url = req.protocol + '://' + req.get('host') 
    console.log(url)
    let metadataNFT = getNFTjson(url,query.x);
    res.send(metadataNFT)
})

function getNFTjson (url,x){
    
    let metadataNFT = { 
        name: `0x${x}`,
        description:'this is truts nft demo on testNet',
        image: `${url}/${x}.png`,
        animation_url:`${url}/index.html`
    };

    return metadataNFT;
}

App.get('/ens', async (req, res)=>{
    let query = req.query
    console.log(query)
    var address = await provider.resolveName(query.ens);
    console.log(address)
    res.send(address)
})

// App.listen(port, ()=>{
//     console.log('Server started');
// })

App.listen(process.env.PORT || port, function(){
    console.log("Express server listening");
});