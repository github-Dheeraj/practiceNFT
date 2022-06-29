const express = require('express')
const App = express();
const path = require('path')
const port = 5000
App.use(express.static('public'))


App.get('/', (req, res)=>{
    res.send('testing')
})

App.get('/metadata', (req, res)=>{
    let url = req.protocol + '://' + req.get('host') 
    console.log(url)
    let metadataNFT = { 
        name: 'Mike',
        description:'this is truts nft demo on testNet',
        image: `${url}/frame.png`,
        animation_url:`${url}/index.html`
    };

    res.send(metadataNFT)
})

App.listen(port, ()=>{
    console.log('Server started');
})