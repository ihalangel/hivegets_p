const hiveTx = require('hive-tx')
require("dotenv").config();



const setbrar= async (plot, seed) => {

    try {
        const joinReq = {
            plotID: plot,
            seedID: seed,
        }
        const operations = [
            [
                'custom_json', {
                    required_auths: [],
                    required_posting_auths: ["alvarogonz"],
                    id: 'qwoyn_plant_plot',
                    json: JSON.stringify(joinReq)
                }
            ]
        ]
        const tx = new hiveTx.Transaction()
        await tx.create(operations)
        const privateKey = hiveTx.PrivateKey.from(process.env.POSTINGKEY)
        tx.sign(privateKey)
        const result = await tx.broadcast()
        if (result && result.result && result.result.block_num) {
            console.log("QUE EXITO")
        } else {
            console.log("ERRORES")
            console.error(result)
        }
    } catch (e) {
        console.log("ERRORES")
        console.error(e)
    }

}

module.exports = {
    setbrar
}