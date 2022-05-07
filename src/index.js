require("dotenv").config();
//const aws = require('aws-sdk');
const hive = require('@hiveio/hive-js');


const H_KEY = process.env.H_KEY
const MONGOUSE = process.env.mongouse


const {
    getTokenHolders
} = require("./funtions/getTokens");

const {
    getNfts,
    getNftss

} = require("./funtions/getNfts");

const {
    setbrar,
    setbrar1
} = require("./funtions/setNfts.js");



async function test() {
    console.log("Inicializando Hk-curation")

  
    //   const nft = await getNfts("alvarogonz")
    //  console.log(nft)
    // console.log(toString(nft))

    let plot = 57168
    let seed = 720000
    const sembrar = await setbrar(plot, seed)

    console.log(sembrar)
}






test()