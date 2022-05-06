const axios = require('axios');

require("dotenv").config();
const hive = require('@hiveio/hive-js');



async function setbrar(plot, seed) {
    
    //wif = process.env.HIVE_A_K
   wif = process.env.POSTINGKEY
    //wif = hive.auth.toWif("alvarogonz", process.env.HIVE_A_K, 'active');
    //wif = hive.auth.toWif("alvarogonz", process.env.POSTINGKEY, 'posting');


     let json = {
        plotID: plot,
        seedID: seed,
         };

        
     
    let r = await new Promise((resolve, reject) => {
        hive.broadcast.customJson(
            wif, ["alvarogonz"],[],
            "qwoyn_plant_plot",
            JSON.stringify(json),
            async function(err, result) {
                if (err) {


                    console.log(err)
                    reject(false);
                } else {
                    console.log("Sembrada")
                    console.log(result)
                    resolve(true);
                }
            }
        )
    })
    
    console.log("Berga esta es r", r)
    
    return r;
}








async function setbrar1(plot, seed) {

    wif = process.env.HIVE_A_K
    //wif = process.env.POSTINGKEY
    //  wif = hive.auth.toWif("alvarogonz", process.env.HIVE_A_K, 'active');
    //wif = hive.auth.toWif("alvarogonz", process.env.POSTINGKEY, 'posting');

    action = {}
    action['plotID'] = plot
    action['seedID'] = seed
    cj = {
        "required_auths": [],
        "required_posting_auths": ["alvarogonz"],
        "id": "qwoyn_plant_plot",
        "json": action
    }

    let r = await new Promise((resolve, reject) => {
        hive.broadcast.customJson(
            "qwoyn_plant_plot",
            JSON.stringify(cj),
            async function(err, result) {
                if (err) {


                    console.log(err)
                    reject(false);
                } else {
                    console.log("Sembrada")
                    console.log(result)
                    resolve(true);
                }
            }
        )
    })
    console.log("Berga esta es r", r)
    return r;
}





 


module.exports = {
    setbrar,
    setbrar1
}


   //console.log(cj)
    /*tx.appendOps(Custom_json(cj))
    #tx.appendWif(posting)
    get_key(account, "posting")
    tx.appendSigner(account, "posting")
    signed_tx = tx.sign()*/

    
/*[ [ 
"custom_json", 
{ "id": "ssc-mainnet-hive", 
"json": "{\"contractName\":\"tokens\",\"contractAction\":\"transfer\",
\"contractPayload\":{\"symbol\":\"HKWATER\",\"to\":\"hk-vault\",\"quantity\":\"35296.000\",

\"memo\":\"[733569,733565,733552,747002,733558,746931,684181,696047]\"}}", 
"required_auths": [ "alvarogonz" ], "required_posting_auths": [] } ] ]




[ [ "custom_json", 
{ "id": "qwoyn_plant_plot", 
"json": "{\"plotID\":\"57781\",\"seedID\":\"733562\"}", 
"required_auths": [], 
"required_posting_auths": [ "alvarogonz" ] } ] ]


[ 
[ "custom_json", 
{ "id": "ssc-mainnet-hive", 
"json": "{\"contractName\":\"tokens\",\"contractAction\":\"transfer\",
\"contractPayload\":{\"symbol\":\"BUDS\",\"to\":\"electru\",\"quantity\":\"55.988\",\
"memo\":\"Delegation Rewards\"}}", 
"required_auths": [ "hk-curation" ], 
"required_posting_auths": [] } ] ]

*/


    /*
    [ "custom_json", 
{ "id": "ssc-mainnet-hive", 
"json": "{\"contractName\":\"tokens\",\"contractAction\":\"transfer\",
\"contractPayload\":{\"symbol\":\"BUDS\",\"to\":\"electru\",\"quantity\":\"55.988\",\
"memo\":\"Delegation Rewards\"}}", 
"required_auths": [ "hk-curation" ], 
"required_posting_auths": [] } ]


    
        "custom_json", 
        { "id": "qwoyn_plant_plot", 
        "json": "{\"plotID\":\"51878\",\"seedID\":\"734885\"}", 
        "required_auths": [], 
        "required_posting_auths": [ "alvarogonz" ] } 
        



 */

 /*
hive.api.setOptions({ url: 'https://anyx.io' });
hive.config.set('address_prefix','STM');
hive.config.set('chain_id','beeab0de00000000000000000000000000000000000000000000000000000000');
hive.config.set('alternative_api_endpoints', ['https://api.hive.blog', 'https://anyx.io']);



hive.api.setOptions({ url: "https://api.deathwing.me" });
hive.config.set("alternative_api_endpoints", [
  "https://api.hive.blog/",
  "https://api.deathwing.me",
  "https://anyx.io/",
]);
//hive.chain_params['chain_id'] = 'beeab0de00000000000000000000000000000000000000000000000000000000'
*/