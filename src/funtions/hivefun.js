const axios = require('axios');
require("dotenv").config();
//const hive = require('@hiveio/hive-js');
//const SSC = require("sscjs");
//const ssc = new SSC("https://rpc.hashkings.xyz/");
//PoolAddress = process.env.CUENTAHIVE;
//wif = process.env.H_KEY
//from = process.env.CUENTAHIVE
//id = "ssc-mainnet-hive"
//const { response } = require('express');

nodes = { hiveEngineRPC: 'https://api.hive-engine.com/rpc', historyAPI: 'https://accounts.hive-engine.com/accountHistory' };
const HE_RPC = nodes.hiveEngineRPC;


//Llamada Hive con Axios alone
const call = async(endpoint, request) => {
    const postData = {
        jsonrpc: '2.0',
        id: Date.now(),
        ...request,
    };

    let result = null;

    try {
        const post = await axios.post(`${HE_RPC}/${endpoint}`, postData, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });

        if (post.status === 200) result = post.data.result;

    } catch (e) {
        console.log(e.message);
    }
    //console.log(result)
    return result;
};


const callBlockchain = (request) => call('blockchain', request);
const callContract = (request) => call('contracts', request);






const getTierras = async(symbol, offset = 0, limit = 1000) => {
    const query = {};
    if (symbol) query.symbol = symbol;
    request = {
        method: 'find',
        params: {
            contract: 'tokens',
            table: 'balances',
            query,
            offset,
            limit,
        },
    };

    return callContract(request);
};








async function sendExpRwr(usuario, amount, id) {
    wif = process.env.clavekey
    let json = {
        contractName: "tokens",
        contractAction: "transfer",
        contractPayload: {
            symbol: "EXP",
            to: usuario,
            quantity: "" + amount,
            memo: "Hold Budsx Rewards",
        },
    };

    let r = await new Promise((resolve, reject) => {
        hive.broadcast.customJson(
            wif, ["ihalangels"], [],
            "ssc-mainnet-hive",
            JSON.stringify(json),
            async function(err, result) {
                if (err) {
                    setRCrPError(id)
                    reject(false);
                    console.log(err)
                } else {
                    console.log("Saldada")
                    setRCrDone(id)
                    resolve(true);
                }
            }
        )
    })
    return r;
}



async function balance_pool(idC) {
    await ssc.findOne(
        'tokens',
        'balances', {
            account: PoolAddress
        }, (err, result) => {

            let resultado = (parseInt(result.balance) / 50)
            console.log("pool a repartir", resultado)
            setNewRwrExpBXHls(idC, resultado)
            return (resultado)

        })
}



module.exports = {
    call,
    callContract,
    callBlockchain


};