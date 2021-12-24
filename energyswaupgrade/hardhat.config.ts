import {HardhatUserConfig} from "hardhat/types";
import accounts from "./test/Accounts";
import { ethers } from "hardhat";
import dotenv from 'dotenv';
import {Signer} from 'ethers';
import "@nomiclabs/hardhat-ethers"
import "solidity-coverage";
import "hardhat-gas-reporter";
import "hardhat-deploy";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-truffle5";
import "hardhat-deploy";
require('@openzeppelin/hardhat-upgrades');
dotenv.config()
//let signers;
//let  signer;
//async ()=> {
//signers =  await ethers.getSigners().g;
//signer = signers[0];
const RINKEBY_NETWORKCODE  =process.env.RINKEBY_NETWORK;
const ROPSTEN_NETWORKCODE  =process.env.ROPSTEN_NETWORK;
const KOVAN_NETWORKCODE  =process.env.KOVAN_NETWORK;
const MAINNET_NETWORKCODE  =process.env.MAINNET_NETWORK;
const PROJECTSECRET = process.env.PROJECTSECRET;
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || process.env.ALCHEMY_MAINNET_RPC_URL || "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
const ROPSTEN_RPC_URL= process.env.ROPSTEN_RPC_URL || "https://eth-ropsten.alchemyapi.io/v2/your-api-key"
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "https://eth-rinkeby.alchemyapi.io/v2/your-api-key"
const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL || "https://eth-kovan.alchemyapi.io/v2/your-api-key"
const MNEMONIC = process.env.MNEMONIC || "your mnemonic"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "Your etherscan API key"
// optional
const PRIVATE_KEY = process.env.PRIVATE_KEY || "your private key";
const RINKEBY_API_KEY=process.env.RINKEBY_API_KEY;
const ROPSTEN_KEY=process.env.ROPSTEN_KEY;
const KOVAN_API_KEY=process.env.KOVAN_API_KEY;
const MAINNET_API_KEY=process.env.MAINNET_API_KEY; 
const PRIVATE_KEYCODE = process.env.PRIVATE_KEY;
const APIKEY = process.env.APIKEY;
const config: HardhatUserConfig = {
defaultNetwork: "hardhat",
solidity: {
compilers: [
{
version: "0.8.2",
settings: {
optimizer: {
enabled: false
}
},
},
{
version: "0.5.5",
},
{
version: "^0.8.0",
},
{
version: "0.8.0",
},
{
version: "^0.6.0",
},
{
version: "0.6.0",
},
{
version: "^0.4.8",
},
{
version: "0.4.8",
},
{
version: "^0.4.11",
},
{
version: "0.4.11",
},
{
version: "^0.4.24",
},
{
version: "0.4.24",
},
{
version: "^0.5.0",
},
{
version: "^0.6.6",
},
],
overrides: {
"contracts/Color.sol": {
version: "0.8.2",
settings: { optimizer: {
//evmVersion: "constantinople", consensus algorithm to change
enabled: false
},
}
},
}
},
paths: {
sources: "./contracts",
artifacts: "./artifacts",
tests: "./test",
cache: "./cache",
deploy: "./scripts"
},
//mocha: {
// timeout:15000 
// },
networks: {
hardhat: {
loggingEnabled: false,
live: false,
accounts: accounts,
gas: "auto",
gasPrice: "auto",
gasMultiplier: 1.5
},
polygon: {
url: "https://rpc-mainnet.maticvigil.com/",
// accounts: [`${process.env.RINKEBY_MNEUMONIC}`],
accounts: {
mnemonic: MNEMONIC,
},
saveDeployments: true,
},
coverage: {
url: 'http://127.0.0.1:5458'
},
localhost: {
url: 'http://127.0.0.1:8545',
live: true,
loggingEnabled: true,
gas: "auto",
gasPrice:"auto",
gasMultiplier: 1.5
},
goerli: {
url: `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
accounts: {
mnemonic: `${process.env.MNEMONIC}`
},
chainId: 5,
loggingEnabled: true,
gas: "auto",
gasPrice: "auto",
gasMultiplier: 1.5
},
rinkeby: {
live: true,
saveDeployments: true,
tags: ["staging"],
chainId: 4,
url:`https://rinkeby.infura.io/v3/${process.env.RINKEBY_API_KEY}`,
accounts: {
mnemonic: `${process.env.RINKEBY_MNEUMONIC}`
},
// gas: 3000000,1000000000
gas: "auto",
gasPrice: "auto",
gasMultiplier: 1.5
},
ropsten: {
live: true,
saveDeployments: true,
tags: ["staging"],
chainId: 3,
// url: String(process.env.ROPSTEN_RPC_URL),
url: `https://ropsten.infura.io/v3/${process.env.ROPSTEN_KEY}`,
//  url: `https://rinkeby.infura.io/v3/`,
/* accounts: {
privatekey:   [RU], 
mnemonic: `${process.env.RINKEBY_MNEUMONIC}`
},*/
//  accounts: [`0x${process.env.PRIVATE_KEY}`],
accounts: {
mnemonic: `${process.env.MNEUMONIC}`
},
// gas: 3000000,1000000000
gas: "auto",
gasPrice: "auto",
gasMultiplier: 1.5
},
kovan: {
live: true,
saveDeployments: true,
tags: ["staging"],
chainId: 42,
url: `https://kovan.infura.io/v3/${process.env.KOVAN_API_KEY}`,
//  url: `https://rinkeby.infura.io/v3/`,
/* accounts: {
privatekey:   [RU], 
mnemonic: `${process.env.RINKEBY_MNEUMONIC}`
},*/
//  accounts: [`0x${process.env.PRIVATE_KEY}`],
accounts: {
mnemonic: `${process.env.MNEUMONIC}`
},
// gas: 3000000,1000000000
gas: "auto",
gasPrice: "auto",
gasMultiplier: 1.5
},
mainnet: {
live: true,
saveDeployments: true,
tags: ["staging"],
chainId: 1,
url: `https://mainnet.infura.io/v3/${process.env.MAINNET_API_KEY}`,
accounts: {
mnemonic: String(process.env.MNEMONIC)
}
}
},
gasReporter: {
//  coinmarketcap: process.env.COINMARKETCAP_API_KEY,
enabled: !!(process.env.REPORT_GAS && process.env.REPORT_GAS != "false"),
},
typechain: {
outDir: "typechain",
target: "ethers-v5"
},
namedAccounts: {
deployer: {
default: 0,
6: 0,
1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
4: String(process.env.DEV_ADDRESS), // but for rinkeby it will be a specific address
"goerli": '0x84b9514E013710b9dD0811c9Fe46b837a4A0d8E0',
//it can also specify a specific netwotk name (specified in hardhat.config.js)
},
tokenowner: String (process.env.DEV_ADDRESS)
},
etherscan: {
// Your API key for Etherscan
// Obtain one at https://etherscan.io/
apiKey: process.env.ETHERSCAN_API_KEY
}
}
export default config;