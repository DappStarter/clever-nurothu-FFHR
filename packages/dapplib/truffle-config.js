require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet rescue still evil inner dry equal ghost'; 
let testAccounts = [
"0xf2032b950d43dc430f3206d4b9b23e187b4fcf9972f5360d0b27ec00fa0953c8",
"0xe643338ae801f4e95efcd956e7e4d43908a60632518b931f801832c2e0cc0725",
"0x22cd4d637256cace124b83e2800dfa776e099cc85de1fcc9a772d651f996c0f2",
"0x56b2c9ced972aa62825d97d244c858cfd3967a1c428a04b821977b80a1561f77",
"0xfc38431ccfb204ec425a8a0ac2692a86009131f6da70b353749908cbdea6fcac",
"0xb1ba4ab76648f83fe98c118088a467e34512d4f029b343614a3f4d59328a94af",
"0x5b89a76b190c070577495e3a96f04f4b02437d6ca50a1d3cdded33a5dd1ba954",
"0x3fb5225d4ef2f27a7d13bb8467fea16615a13c304943cef0bfe27b133e6b1a21",
"0x80325152d0ed44b7b0b626ca02a99ee33f140864a83dd1732617d19da823ed9b",
"0x9052d4b6cf5fc9dd8444b0f2085cf137a8bc8e2d1e96cb7fc64462d0ac4a11a4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


