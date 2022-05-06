sendTokens

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