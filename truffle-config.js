// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

var HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = "mnemonic";

module.exports = {
  networks: {

    testrpc: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },

    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
     testnet: {
      provider: function() {
        return new HDWalletProvider("your-private-key", "http://91.92.136.179:4949/");
      },
      network_id: "*",
      gas: 7999999,
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    },

    mainnet: {
      provider: function() {
        return new HDWalletProvider("your-private-key", "http://rpc.tsf-platform.com:4949/");
      },
      network_id: "*",
      gas: 4712388,
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider("your-private-key", 'https://kovan.infura.io/v3/your-infura-key');
      },
      network_id: 42,
      // gas: 12000000,        
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider("your-private-key", 'https://ropsten.infura.io/v3/your-infura-key);
      },
      network_id: 3,
      // gas: 12000000,        
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    },

  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.2",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "byzantium"
       }
    }
  }
};
