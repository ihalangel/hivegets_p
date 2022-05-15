require("dotenv").config();
const cron = require("node-cron")
const hive = require('@hiveio/hive-js');


const Username = process.env.USUARIO
const Tierra = process.env.PLOT
const H_KEY = process.env.H_KEY
const MONGOUSE = process.env.mongouse


const {
    getTokenHolders
} = require("./funtions/getTokens");

const {
    getPlots,
    getSeed

} = require("./funtions/getNfts");

const {
    setbrar
} = require("./funtions/setNfts.js");



async function test() {
    console.log("Inicializando Hk-curation")
    procesarSiembra(Username,Tierra)
     


    
 
     //const sembrar = await setbrar(plot, seed)

    //console.log(sembrar)
}




 async function procesarSiembra(user,trr){
let tierras= ["South America","Mexico","Afghanistan","Africa","Jamaica","Asia"]
let Semillas=["Panama Red","Colombia Gold","Acapulco Gold","Hindu Kush","Afghani","Lashkar Gah","Mazar I Sharif","Malawi","Durban Poison","Kilimanjaro","King’s Bread","Lamb’s Bread"] 

  const sd = await definirsiembra(trr) 
  console.log("SEMBRANDO ", Semillas[sd], " En :", tierras[trr]);
    
 
   const plots = await getPlots(user,tierras[trr])
   console.log("plots", plots);
  const r = plots;
  let plot=[]

        r.forEach(function(r, index) {
         if ( r.OCCUPIED != true  && ( (r.properties.RENTEDINFO = "n/a") || (r.properties.RENTED = false) )) {
            plot.push(r._id)   }
        });

      console.log("plot", plot);


  const seeds = await getSeed(user,Semillas[sd]) 
  //console.log("seeds", seeds);

 
         let seed=[]
         const s = seeds;
        s.forEach(function(s, index) {
         if ( s.properties.PLANTED != true ) {
            seed.push(s._id)  
            console.log("seed:", s.properties.NAME) }
        });

      //console.log("seed", seed);  

       if (seed.length >= 1){

      for (var i = 0 ; i < plot.length ; i++) {
        
    if ( plot[i] && seed[i]){ await setbrar(plot[i],seed[i])} 

      }}

     
    

 }


async function definirsiembra(indice){
let is = 20
    if (indice == 0){let t=0;      is=Math.floor(Math.random() * 1); }
    if (indice == 1){let t=1;      is=2}
    if (indice == 2){let t=2;      is=Math.floor(Math.random() * 4) + 3; }
    if (indice == 3){let t=3;      is=Math.floor(Math.random() * 3) + 7; }
    if (indice == 4){let t=4;      is=Math.floor(Math.random() * 2) + 10; }
    if (indice == 5){let t=5;      is=Math.floor(Math.random() * 2) + 12; }
    

return is


}

   cron.schedule('* * * * *', async() => {

            test()

        })

