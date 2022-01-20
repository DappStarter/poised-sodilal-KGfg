require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift rifle rural minor hockey arena army genuine'; 
let testAccounts = [
"0xb155c774541fe5a3062876e9123de5501e7f39b32a363004d624a68f4afe0c92",
"0x4fd54a5e1d2ac43b993b750b0336327ffb961c43b0803fda55110723724945cf",
"0xabbbc2a9bb1b8347a5ab1a5f04342cb97f65285b020c7006cbf613af63569ded",
"0x482acf98c9595c4307318a9b7ebccc64859e6057368795b1671a3c9719ebc000",
"0xd4a364b0b8fbaf232a43d1e33e6bb3a860a1db2d993d891201dc82ba0f9f50e4",
"0x74506923865a650ee5021761e715e0121584074e224b5a272a60f5111564a77c",
"0xa217b778ca27411d0929ed454f6ebfac9a3ce9b19271066b1147e498e6b5fe0d",
"0xf15b0eb433ef5ae870c3c72c3870f61f7b611e1736f392178e831140da47d361",
"0xae82e2354ec8e3c41d211dd1403fc3c02a26de3dea4edf250d54b586b37607e8",
"0x7fbbab6ecfe88c2c30f7a5e950068489d63c9dd8ba14a431f29da9a5ffe465e3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

