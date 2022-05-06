const {
    callContract,
    callBlockchain

} = require("./hivefun.js");

const getTokenHolders = async(symbol, offset = 0, limit = 1000) => {
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

module.exports = {
    getTokenHolders

};