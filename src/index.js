require("dotenv").config();
//const aws = require('aws-sdk');
//const hive = require('@hiveio/hive-js');
const { json } = require("express/lib/response");

const port = process.env.PORT || 3000
    //const H_KEY = process.env.H_KEY
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

    // const holders = await getTokenHolders("BUDSX")
    // console.log(holders)
    //   const nft = await getNfts("alvarogonz")
    //  console.log(nft)
    // console.log(toString(nft))

    let plot = 57814
    let seed = 733553
    const sembrar = await setbrar(plot, seed)

    console.log(sembrar)
}






test()