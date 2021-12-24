//Import modules
let  { ethers, hre, upgrades } =require  ("hardhat");
import  { HardhatRuntimeEnvironment } from "hardhat/types";
import  { DeployFunction }  from "hardhat-deploy/types";
let  { Signer, BigNumber, ContractFactory, Contract } =require ("ethers");
let  {SignerWithAddress} =require ('@nomiclabs/hardhat-ethers/signers');
let  { expect } =require ("chai");
let  chai   =require ("chai");
let  chaiaspromised =require ("chai-as-promised");
let  { Wallet } =require  ("ethers");
let  assert =require('assert');
let { networkConfig, getNetworkIdFromName } =require ("../utils/helper-hardhat-config");
const fs = require('fs')
chai.use(require('chai-bignumber')());
//We import helpers from providers
let {
getInfuraProvider,
getInfuraListedAccounts,
getInfuraWebSocketProvider,
getInfuraApiKey,
getInfuraUrl,
getEtherscanProvider,
getEtherscanNetwork,
getEtherscanUrl,
getEtherscanTransactionReceipt,
getEtherscanPostUrl,
getEtherscanDetectedNetwork,
getEtherscanFetchedUrl,
getEtherscanHistory,
getAlchemyProvider,
getAlchemyWebSocketProvider,
getAlchemySigner,
getAlchemyListedAccounts,
getAlchemyTransaction,
getWallet,
getSignerForWallet,
PopulateWalletTransaction,
SignWalletTransaction,
signWalletMessage,
setWalletWithMnemonic,
getWalletBalanceWithMnemonic,
getWalletWithPrivateKey,
getWalletWithPublicKey,
ConnectToContract,
getContract,
DeployContract,
getContractDeployed,
getConnectContract,
AttachContractToAddress,
getSignerForContract,
getProviderInfoForTheContract,
getDeployedTransationInf,
getContractEventWithListener,
getContractEmmittedWithListener,
getDeployedTransactionForContractFactory,
getWalletForInfura
} = require("../utils/helpers");
let  { TransactionRequest } = require("@ethersproject/abstract-provider");
let ethereumwallet;
const  ROPSTEN_NETWORK = process.env.ROPSTEN_NETWORK;
const ROPSTEN_API = process.env.ROPSTEN_API;
const DEV_ADDRESS=process.env.DEV_ADDRESS;
const RINKEBY_NETWORKCODE  =process.env.RINKEBY_NETWORK;
const ROPSTEN_NETWORKCODE  =process.env.ROPSTEN_NETWORK;
const KOVAN_NETWORKCODE  =process.env.KOVAN_NETWORK;
const MAINNET_NETWORKCODE  =process.env.MAINNET_NETWORK;
const RINKEBY_API_KEYCODE =  process.env.RINKEBY_API_KEY;
const PRIVATE_KEYCODE = process.env.PRIVATE_KEY;
const APIKEY = process.env.APIKEY;
const RINKEBYPRIVATEKEYCODE = process.env.PRIVATE_KEY;
const PREFIXEDPRIVATEKEY = process.env.PRIVATE_KEYWITHPREFIX;
const _RINKEBY_API = process.env.RINKEBY_API;
const RINKEBY_API_KEY= process.env.RINKEBY_API_KEY;
const RINKEBY_MNEUMONIC=process.env.RINKEBY_MNEUMONIC;
let networkName:string;
let chainId; let tx;
// We call on the deployment environment
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) { // 部署函数把hardhat运行时作为参数
const {deployments, getNamedAccounts,getChainId} = hre; // we get the deployments and getNamedAccounts which are provided by hardhat-deploy
const {deploy} = deployments; // the deployments field itself contains the deploy function
const {deployer, tokenOwner} = await getNamedAccounts(); // we fetch the accounts. These can be configured in hardhat.config.ts as explained above
//      const chainid          = await getChainId()
//const signer = await ethers.getSigner("0x06Da25591CdF58758C4b3aBbFf18B092e4380B65");
//const signers = await ethers.getSigner("0x06Da25591CdF58758C4b3aBbFf18B092e4380B65");
ethereumwallet =  getWalletForInfura(String(PRIVATE_KEYCODE),String(ROPSTEN_NETWORKCODE),String(APIKEY) ); 
await deploy('EnergyGridUpgradeableV2', { // this will create a deployment called 'Token'. By default it will look for an artifact with the same name. the contract option allows you to use a different artifact
from: deployer,
// deployer will be performing the deployment transaction
//WE CAN ADD OTHER ARGUMENT TO THE CONSTRUCTOR, WE HAVE ONE
args: [String(ethereumwallet.address)], // tokenOwner is the address used as the first argument to the Token contract's constructor
// args: [name, symbol], // tokenOwner is the address used as the first argument to the Token contract's constructor
log: true, // display the address and gas used in the console (not when run in test though)
});

};
export default func;
func.tags = ['EnergyGridUpgradeableV2'];