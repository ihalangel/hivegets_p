const { json } = require("express/lib/response");
const {
    callContract,
    callBlockchain

} = require("./hivefun.js");

const getNfts = async(account, offset = 0, limit = 1000, indexes = []) => {
    const query = {};
    query['properties.TYPE'] = 'plot'
    query['properties.OCCUPIED'] = false
    query['properties.NAME'] = 'Mexico'
    if (account) query.account = account;
    console.log(query)
    request = {
        method: 'find',
        params: {
            contract: 'nft',
            table: 'HKFARMinstances',
            query,
            offset,
            limit,
            indexes
        },
    };
    return callContract(request);
}


const getNftss = async(account, offset = 0, limit = 1000, indexes = []) => {
    const query = {};
    query['properties.TYPE'] = 'seed'
        //query['properties.OCCUPIED'] = false
    query['properties.NAME'] = 'Acapulco Gold'
        //query['properties.NAME'] = 'Panama Red'
        //query['properties.WATER'] = 912
        //query['properties.SPT'] = 7
    if (account) query.account = account;
    console.log(query)
    request = {
        method: 'find',
        params: {
            contract: 'nft',
            table: 'HKFARMinstances',
            query,
            offset,
            limit,
            indexes
        },
    };
    return callContract(request);
};


module.exports = {
    getNfts,
    getNftss
}