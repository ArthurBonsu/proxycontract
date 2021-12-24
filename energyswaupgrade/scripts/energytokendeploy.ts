// We import modules
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

// We call on the helpers

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
// We deploy from the deployment hardhat environment

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) { // 部署函数把hardhat运行时作为参数
  const {deployments, getNamedAccounts,getChainId} = hre; // we get the deployments and getNamedAccounts which are provided by hardhat-deploy
  const {deploy, get, log} = deployments; // the deployments field itself contains the deploy function

  const {deployer, tokenOwner} = await getNamedAccounts(); // we fetch the accounts. These can be configured in hardhat.config.ts as explained above
 const chainId = await getChainId();
  networkName = hre.network.name;
   // ethereumwallet =  getWalletForInfura(String(RINKEBYPRIVATEKEYCODE),String(RINKEBY_NETWORKCODE),String(RINKEBY_API_KEY) ); 
ethereumwallet =  getWalletForInfura(String(PRIVATE_KEYCODE),String(ROPSTEN_NETWORKCODE),String(APIKEY) ); 

  const EnergyTokenUpgradeableContract = await ethers.getContractFactory("EnergyTokenUpgradeable");
console.log("Deploying EnergyTokenUpgradeableContract...");

  const energytokenupgrade = await upgrades.deployProxy(EnergyTokenUpgradeableContract, [String(ethereumwallet.address)], { initializer: 'initialize' });

let energytokendeployedaddress =  await energytokenupgrade.deployed();
  console.log("My Energy Token is  deployed to:", energytokenupgrade.address);
 log("Local network detected! Deploying token deployment..." + energytokendeployedaddress.address);

};


export default func;
func.tags = ['EnergyTokenUpgradeable']; 

