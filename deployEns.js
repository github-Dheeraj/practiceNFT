const ethers = require('ethers');

const express = require('express')
const App = express();
const path = require('path')
const port = 5000
App.use(express.static('public'))
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/7cedc93bca594509a5abbaae985320a6')
// "web3": "^1.7.4",
//     "web3-eth-ens": "^1.7.4"
//     "@ensdomains/ensjs": "^3.0.0-alpha.2",

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

App.get('/ens', async (req, res)=>{
    let query = req.query
    console.log(query)
 //   let address = await ens.getAddress(query.ens);
    var address = await provider.resolveName(query.ens);
    console.log(address)
    //let address = await ens.name(query.ens).getAddress();
    res.send(address)
})

App.listen(port, ()=>{
    console.log('Server started');
})