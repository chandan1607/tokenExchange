require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const privateKeys = process.env.PRIVATE_KEYS || ""

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    kovan: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://kovan.infura.io/v3/Qmxx1XHdVeunvE5Qa3iFuXvVV-_7lvlU`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42
    },
    goerli: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
        )
      },
      network_id: 5,       // Goerli's id
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,    // Skip dry run before migrations? (default: false for public nets )

      gas: 4465030,
      gasPrice: 10000000000,
      networkCheckTimeout: 1000000000
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `wss://ropsten.infura.io/ws/v3/$4f0de208a9204152930293e59ae7c196`// Url to an Ethereum Node
        )
      },
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',

  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}