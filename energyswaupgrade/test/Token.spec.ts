import { ethers } from "hardhat";
import { Signer, BigNumber, ContractFactory, Contract } from "ethers";
import {SignerWithAddress} from '@nomiclabs/hardhat-ethers/signers';
import { expect } from "chai";
import chai   from "chai";
import chaiaspromised from "chai-as-promised";
import { Wallet } from "ethers";

import assert from 'assert';
require('@openzeppelin/hardhat-upgrades');
/


import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

chai.use(require('chai-bignumber')());

import {
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
} from "../utils/helpers";
import { TransactionRequest } from "@ethersproject/abstract-provider";

//Deployment environment

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer, tokenOwner} = await getNamedAccounts();
}
let transfertest;
let txhash = 0xf077711478c566db5d66813687ad6454c44914c279da4d17142420eaca801670;
let contractaddress = 0x34804cf61978b8F873e5f46D53Aded251f475F94;
let contractaddressstring: string = String(0x34804cf61978b8F873e5f46D53Aded251f475F94);
let gas = 589509;


// All typescript assigned values
  let EnergyGridUpgradeableV2:ContractFactory;

  let  hardhatEnergyGridUpgradeableV2: Contract;  
 let energyuseraddress:string;
    let hardhatEnergyGridUpgradeableV2address:string;
 
  let amountstaked:BigNumber;
  let energyid:BigNumber;
  
  amountstaked = BigNumber.from(20);
  let _ownerbalanceset;
 let tokennum:BigNumber = BigNumber.from(1);
 let bignumbergained;
 let amounttobetransferred;

  let Token:ContractFactory;
  let hardhatToken:Contract;
  let owner:SignerWithAddress;
  let addr1:SignerWithAddress;
  let addr2:SignerWithAddress;
  let addrs:SignerWithAddress[];
  let Challenge: ContractFactory;
  let Incrementor: ContractFactory;
  let  hardhatChallenge: Contract;
  let   hardhatIncrementor:Contract;
  let RockPaperScissorshere:ContractFactory;
  let rockpaperscissorshere:Contract;
  let rockpaperaddress:string;
    let playeraddress:string;
  let amount:BigNumber;
  let gameid:BigNumber;
  let totalSupply:number;
  amount = BigNumber.from(1);
  playeraddress = "0x06Da25591CdF58758C4b3aBbFf18B092e4380B65";
  gameid = BigNumber.from(3);
  totalSupply = 1000000;
  let ethereumwallet: Wallet;
  let walletaddress: string 


// We import Chai to use its asserting functions here.
require("dotenv").config();
const DEV_ADDRESS=process.env.DEV_ADDRESS;

// `describe` is a Mocha function that allows you to organize your tests. It's
// not actually needed, but having your tests organized makes debugging them
// easier. All Mocha functions are available in the global scope.

// `describe` receives the name of a section of your test suite, and a callback.
// The callback must define the tests of that section. This callback can't be
// an async function.

// environmental variables

const ROPSTEN_API = process.env.ROPSTEN_API;

const RINKEBY_NETWORKCODE  =process.env.RINKEBY_NETWORK;
const ROPSTEN_NETWORKCODE  =process.env.ROPSTEN_NETWORK;
const KOVAN_NETWORKCODE  =process.env.KOVAN_NETWORK;
const MAINNET_NETWORKCODE  =process.env.MAINNET_NETWORK;

const RINKEBY_API_KEYCODE =  process.env.RINKEBY_API_KEY;

const RINKEBYPRIVATEKEYCODE = process.env.PRIVATE_KEY;
const PREFIXEDPRIVATEKEY = process.env.PRIVATE_KEYWITHPREFIX;
const _RINKEBY_API = process.env.RINKEBY_API;
const RINKEBY_API_KEY= process.env.RINKEBY_API_KEY;
const RINKEBY_MNEUMONIC=process.env.RINKEBY_MNEUMONIC;

const PRIVATE_KEYCODE = process.env.PRIVATE_KEY;
const APIKEY = process.env.APIKEY;
// The Rinkeby Network, Setting A Provider For the Rinkeby With Infura As The PRovider
//let apikey  =  ethers.providers.InfuraProvider.getApiKey(RINKEBY_API_KEYCODE);
//let myprovider  =  ethers.providers.InfuraProvider.getUrl(RINKEBY_NETWORKCODE,apikey );



let txhash_chall = 0x3714bfcfd96311f56674f8efcf20b6020f5126b0ab422e12a73c878cbf9ced7a;
let contractaddress_chall = 0x6D2C102938f375F896Db0f931f6960f016390e41;
let contractaddressstring_chall: string = String(0x34804cf61978b8F873e5f46D53Aded251f475F94);
let gas_chall = 1163137;
let useraccount = "0x06Da25591CdF58758C4b3aBbFf18B092e4380B65";
let thechallengeaddress: string;
let theincrementoraddress:string;
 theincrementoraddress = "0x34804cf61978b8f873e5f46d53aded251f475f94";
let one_chall: BigNumber;
one_chall  = BigNumber.from(1);

  let signers: Signer[],
    admin: Signer,
    adminAddress:string,
    challengeFactory: ContractFactory,
    challenge: Contract, 
    incrementorFactory: ContractFactory,
    incrementor: Contract;
    
 

  const nums: BigNumber[] = [1, 2, 3].map((num) => BigNumber.from(num)),
    weth: string = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    tokens: string[] = [
      "0x514910771AF9Ca656af840dff83E8264EcF986CA", // LINK
      "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", // UNI
      "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", // WBTC
      "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", // USDC
    ],
    tokensAsBigNumbers: BigNumber[] = [
      BigNumber.from("464057641162257223597913127019930606481545201354"),
      BigNumber.from("180374059643543449999388718682590567161426737540"),
      BigNumber.from("196268403159008932410419402999721616371951519129"),
      BigNumber.from("611382286831621467233887798921843936019654057231"),
      BigNumber.from("917551056842671309452305380979543736893630245704"),
    ],
    numsAsAddresses: string[] = [
      "0x0000000000000000000000000000000000000001",
      "0x0000000000000000000000000000000000000002",
      "0x0000000000000000000000000000000000000003",
    ],
    pairsCorrect: string[] = [
      "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
      "0xd3d2e2692501a5c9ca623199d38826e513033a17",
      "0xbb2b8038a1640196fbe3e38816f3e67cba72d940",
      "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",
      "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc",
      "0xae461ca67b15dc8dc81ce7615e0320da1a9ab8d5",
    ].map((pair) => ethers.utils.getAddress(pair));

describe("EnergyGrid Test", function () {
  // Mocha has four functions that let you hook into the the test runner's
  // lifecyle. These are: `before`, `beforeEach`, `after`, `afterEach`.

  // They're very useful to setup the environment for tests, and to clean it
  // up after they run.

  // A common pattern is to declare some variables, and assign them in the
  // `before` and `beforeEach` callbacks.



  // `beforeEach` will run before each test, re-deploying the contract every
  // time. It receives a callback, which can be async.
  beforeEach(async function () {
    // Get the ContractFactory and Signers here.

   EnergyGridUpgradeableV2 = await ethers.getContractFactory("EnergyGridUpgradeableV2");
    RockPaperScissorshere = await ethers.getContractFactory("RockPaperScissors");
    Token = await ethers.getContractFactory("Token");
    Challenge = await ethers.getContractFactory("Challenge");
    Incrementor = await ethers.getContractFactory("Incrementor");
 
    //etherjs signers is a different one from the ropsten wallet, we have to 
    //find out why
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // To deploy our contract, we just have to call Token.deploy() and await
    // for it to be deployed(), which happens once its transaction has been
    // mined.

 //   let wallet =  getWalletWithPrivateKey(String(process.env.PREFIXEDPRIVATEKEY));

  ethereumwallet =  getWalletForInfura(String(process.env.PRIVATE_KEY),String(process.env.ROPSTEN_NETWORK),String(process.env.APIKEY) ); 
    hardhatToken =await Token.deploy(ethereumwallet.address);
    hardhatChallenge = await Challenge.deploy();
    hardhatIncrementor = await Incrementor.deploy();
    rockpaperscissorshere = await   RockPaperScissorshere.deploy(ethereumwallet.address);
                                   
   // rockpaperscissorshere = await RockPaperScissorshere.attach(owner.address);
    rockpaperaddress = rockpaperscissorshere.address;
    //rockpaperscissorshere.deployed(); 
     hardhatEnergyGridUpgradeableV2 = await EnergyGridUpgradeableV2.deploy(ethereumwallet.address);                                   

    hardhatEnergyGridUpgradeableV2address =hardhatEnergyGridUpgradeableV2.address;
        

      //CHALLENGE TIME HERE
       // get signers array
    signers = await ethers.getSigners();
    
  
    // pull out 1 signer as our admin
    admin = signers[0];
    
    
    // get admin's address
    adminAddress = await admin.getAddress();
    hardhatToken.attach(ethereumwallet.address);
    rockpaperscissorshere.attach(ethereumwallet.address);
    console.log("Wallet Address" + ethereumwallet.address);

    
  
   
      
      });
    
  describe("EnergyGridDeployment", function () {
    // `it` is another Mocha function. This is the one you use to define your
  it("Should transfer tokens between to the address from owner", async function () {
  expect(await hardhatEnergyGridUpgradeableV2.owner()).to.equal(ethereumwallet.address);
      console.log("Transfer grid owner"+ await hardhatEnergyGridUpgradeableV2.owner());
      console.log("Transfer grid balance " + await hardhatEnergyGridUpgradeableV2.balanceOf(ethereumwallet.address));
      console.log ( "Transfer grid total supply"+  await hardhatEnergyGridUpgradeableV2.totalSupply());
 
    _ownerbalanceset = await hardhatEnergyGridUpgradeableV2.balanceOf(ethereumwallet.address);
   console.log("Owners balance before transfer" + _ownerbalanceset);
    console.log("owner balanced before transfer parsed" + ethers.utils.parseEther(String(_ownerbalanceset)));
      // Transfer 50 tokens from owner to addr1
       
       
      console.log("Big number to be transferred" +tokennum );
      
      // converts this to a value of 1.....000000 (We have to set it to a decimal value that represents our value)
      // THe 1000000 is a value of parse ether not really 100000 as a number. It has in a way be exponentiated by the parseEther library. It is not a number, so when I send 1 it is a big one.
      //So it must be  format it to Ether( My one) and send.
       amounttobetransferred = ethers.utils.parseEther("1");
      console.log("Parsed amount to be transferred " +amounttobetransferred );
// You can compare the various format for etherjs

      // Maintains this at the value of 1
      console.log("Usual parsed admount" + parseInt("1"));

      let transferredtokens = parseInt("1");
      let formattedEther = ethers.utils.formatEther("1");
      
      //Convert it into a reduced value of 0.1...
      console.log("formatted ether " + formattedEther);
  //    let valuetobegiven = BigNumber.from(formattedEther);
  
  let thebignumberabouttobesent = BigNumber.from(1);
      console.log("The value of the big number to be sent " + thebignumberabouttobesent);
      // Raising the big number 

let fiftyforbignumber = BigNumber.from(50);
      console.log("The value of the big number to be sent " + fiftyforbignumber);

    
   let transfertransaction =   await hardhatEnergyGridUpgradeableV2.connect(ethereumwallet).transferFrom(ethereumwallet.address, addr1.address, BigNumber.from(50));
   // You can replace the connect method with a new person
   // You can also do this with the attach method. This set the msg.sender as attach method 
   
   console.log("transfer call " +transfertransaction);

   let transfertransactionreceipt =  transfertransaction.wait(1);
   console.log("transfer transaction receipt " +transfertransactionreceipt);

  let transfertransactionvalue =transfertransaction.value;
  console.log("Transaction value received " +transfertransactionvalue);
  //   expect(transfertransactionvalue).to.eql(valuetobegiven);
 
      });


  it("Should choose grid to stake", async function () {
                // The compiler extends about several values to it so BigNumber(1) to the value set is set as 1000000000000000000 inside the compiler
let stakingvalue:BigNumber = BigNumber.from(13);
let energyidgven:BigNumber = BigNumber.from(1);
     //  let amounttostaketransaction =   await hardhatEnergyGridUpgradeableV2.amounttostake();
      // Transfer 50 tokens from owner to addr1
   let _choosegridtostaketransaction =   await hardhatEnergyGridUpgradeableV2.connect(ethereumwallet).choosegridtostake(BigNumber.from(2),ethereumwallet.address,BigNumber.from(7) );
   let returnedvalue = _choosegridtostaketransaction.value;
   // You can replace the connect method with a new person
    // We can return transactions 
   let _choosegridtostaketransactionreceipt = _choosegridtostaketransaction.wait(1);
   // You can also do this with the attach method. This set the msg.sender as attach method 
   console.log(""+ _choosegridtostaketransaction);
 // In case we went to send transaction to block
 

 //  expect(_choosegridtostaketransaction).to.eql(stakingvalue);
 
      });


it("Should transfer amount to address 1", async function () {

   
     let thepayfee = await hardhatEnergyGridUpgradeableV2.attach(ethereumwallet.address).payfee( ethereumwallet.address, addr1.address, BigNumber.from(13)) 
     //  let thepaidfee: boolean;
        console.log("ethereum wallet " + ethereumwallet.address);
        console.log("ethereum wallethere " + thepayfee);
        const [success, data ] = thepayfee;
        console.log(thepayfee.success);
        console.log(thepayfee.data);
  
        expect(thepayfee).to.be.true;
       
      
      
    
      });




  
