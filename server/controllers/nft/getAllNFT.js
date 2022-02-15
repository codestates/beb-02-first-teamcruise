const Web3 = require('web3');
const erc721Abi = require('/Users/seomingyun/VSworkspace/BEB_space/project/practice_server/abis/erc721Abi.js');

function getWeb3() { 
    // const ethNetworks = 'http://127.0.0.1:7545';
    const ethNetworks = 'https://ropsten.infura.io/v3/78f7a6d2a74d45e1ad26107780798062';
    const web3 = new Web3(new Web3.providers.HttpProvider(ethNetworks));
    return web3;
}


module.exports = async (req, res) => {
    const web3 = getWeb3();
    // console.log(web3);

    // const erc721Addr = '0x88877046D5a59B9DE8E475D425521625A4a77345';
    console.log('getAllNFT query', req.query);
    const erc721Addr = req.query.erc721Addr;

    const tokenContract = await new web3.eth.Contract(
        erc721Abi,
        erc721Addr
    );
    tokenContract.options.address = erc721Addr;
    const name = await tokenContract.methods.name().call();
	const symbol = await tokenContract.methods.symbol().call();
	const totalSupply = await tokenContract.methods.totalSupply().call();

    // console.log("NFT 현황: ", name, symbol, totalSupply);

    const tokenList = [];

    for (let tokenId =1; tokenId<=totalSupply; tokenId++){
        let tokenURI = await tokenContract.methods
        .tokenURI(tokenId)
        .call();

        tokenList.push({tokenId, tokenURI});
    }
    
    console.log(tokenList);

    res.status(200)
    .json({
        data: {tokenListInfo : tokenList},
        message: 'get All NFTs successfully'
    });

};