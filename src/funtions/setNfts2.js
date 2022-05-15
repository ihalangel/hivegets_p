require("dotenv").config();
var dhive = require("@hiveio/dhive");

var client = new dhive.Client(
  [
   // "https://api.deathwing.me",
    //"https://api.pharesim.me",
    //"https://hived.privex.io",
    "https://api.hive.blog"
  ],
  { consoleOnFailover: true }
);

var key = dhive.PrivateKey.fromLogin("alvarogonz", process.env.POSTINGKEY , "posting");
console.log("key", key);


if(key){
let json = {
        plotID: 57168,
        seedID: 720000,
         };

client.broadcast
      .json(
          {
            required_auths: [],
            required_posting_auths: ["alvarogonz"],
            id: "qwoyn_plant_plot",
            json: JSON.stringify(json),
          },
          key
        )
   
  .then(
    function(result) {
      console.log("Included in block: " + result.block_num);
    },
    function(error) {
      console.error("RRRRRRRRRRRRTTTTTTTTTTTTTT", error);
    }
  );
}