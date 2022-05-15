
const {
    callContract,
    callBlockchain

} = require("./hivefun.js");

const getPlots = async(account,plot, offset = 0, limit = 20, indexes = []) => {
    const query = {};
    query['properties.TYPE'] = 'plot'
    query['properties.OCCUPIED'] = false
    query['properties.NAME'] = plot  //Mexico,
   // query['properties.RENTEDINFO'] = 'n/a'  //Mexico,
    

    if (account) query.account = account;
    //console.log(query)
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


const getSeed = async(account,seed, offset = 0, limit = 50, indexes = []) => {
    const query = {};
        query['properties.TYPE'] = 'seed'
        //query['properties.OCCUPIED'] = false
        query['properties.NAME'] = seed
        //query['properties.NAME'] = seed
        query['properties.PLANTED'] =null
        //query['properties.SPT'] =6
    if (account) query.account = account;
    //console.log(query)
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
    getPlots,
    getSeed
}