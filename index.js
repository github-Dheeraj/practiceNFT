const express = require('express')
const App = express();
const path = require('path')
const port = 5000
App.use(express.static('public'))

//const ethers = require('ethers');
// const {ethereum} = window
// var Web3 = require("web3")
// //var accounts = ethereum.enable();
// var web3 = new Web3(ethereum);
// var ens = web3.eth.ens;

// App.get('/', (req, res)=>{
//     res.send('testing')
// })

App.get('/metadata', (req, res)=>{
    let url = req.protocol + '://' + req.get('host') 
    console.log(url)
    let metadataNFT = { 
        name: 'Mike',
        description:'this is truts nft demo on testNet',
        image: `${url}/frame-2.png`,
        animation_url:`${url}/index.html`
    };

    res.send(metadataNFT)
})

// App.get('/ens', async (req, res)=>{
//     let query = req.query
//     console.log(query)
//     let address = await ens.getAddress(query.ens);
    
//     //let address = await ens.name(query.ens).getAddress();
//     res.send(address)
// })

App.listen(port, ()=>{
    console.log('Server started');
})