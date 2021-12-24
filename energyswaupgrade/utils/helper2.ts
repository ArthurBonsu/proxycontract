//import { Signer, } from "@ethersproject/abstract-signer";
import { TransactionRequest } from "@ethersproject/abstract-provider";
import { Signer } from "crypto";
import "dotenv/config";
import { ethers } from "ethers";
import path from "path";
import { getSignatureForFn } from "typechain";



// BUILDING CUSTOM HELPERS
// I HAVE TO WRITE A LOT OF HELPER FUNCTIONS AND UTILS

// UTILS IS THE PLACE WHERE WE WRITE CUSTOM FUNCTIONS THAT INTERRAACTS WITH THE BLOCKCHAIN

// We can get so many things from the providers such as receipts,balance, blocknumer, transactions and other relevant info
//from the system if we want more details. just put a dot there from the InfuraProvider point or any other provider
export function getInfuraProvider(
  network: string,  
  nodeProviderApiKey:string ): ethers.providers.BaseProvider {
  return new ethers.providers.InfuraProvider(network, nodeProviderApiKey);
}
export function getInfuraListedAccounts(
  network: string,  
  nodeProviderApiKey:string ): Promise<string[]>{
  return new ethers.providers.InfuraProvider(network, nodeProviderApiKey).listAccounts();
}

 //FOR INFURA PRODUCT STRUFFHERE
   
   
 export function getInfuraWebSocketProvider(
  network?: ethers.providers.Networkish | undefined, apiKey?: any ):ethers.providers.InfuraWebSocketProvider {
  return ethers.providers.InfuraProvider.getWebSocketProvider(network,apiKey);
 
}

export function getInfuraApiKey(
  network?: ethers.providers.Networkish, apiKey?: any ): any {
  return ethers.providers.InfuraProvider.getApiKey( apiKey);
}

export function getInfuraUrl(
  network: ethers.providers.Network, apiKey: any ): ethers.utils.ConnectionInfo {
  return ethers.providers.InfuraProvider.getUrl(network, apiKey);
}

// ETHERSCAN HELPERS
export function getEtherscanProvider(
network?: ethers.providers.Networkish, apiKey?: string): any {
  return new  ethers.providers.EtherscanProvider(network, apiKey);
}

export function getEtherscanNetwork(
  network?: ethers.providers.Networkish, apiKey?: string): any {
    return new  ethers.providers.EtherscanProvider(network, apiKey).getNetwork();
  }

export function getEtherscanUrl( module: string, params: Record<string, string>,
network?: ethers.providers.Networkish,apiKey?: string,) {
  return new  ethers.providers.EtherscanProvider(network, apiKey).getUrl(module,params);
}

   
export function getEtherscanTransactionReceipt(transactionHash: string | Promise<string>,
  network?: ethers.providers.Networkish, apiKey?: string, ): Promise<ethers.providers.TransactionReceipt> {
    return new  ethers.providers.EtherscanProvider(network, apiKey).getTransactionReceipt(transactionHash);
  }

  export function getEtherscanPostUrl(
    network?: ethers.providers.Networkish, apiKey?: string): any {
      return new  ethers.providers.EtherscanProvider(network, apiKey).getPostUrl();
    }

    export function getEtherscanDetectedNetwork(
      network?: ethers.providers.Networkish, apiKey?: string): any {
        return new  ethers.providers.EtherscanProvider(network, apiKey).detectNetwork();
      }


      export function getEtherscanFetchedUrl(module: string, params: Record<string, any>,
        network?: ethers.providers.Networkish, apiKey?: string, post?: boolean): Promise<any> {
          return new  ethers.providers.EtherscanProvider(network, apiKey).fetch(module, params, post);
        }

     
        export function getEtherscanHistory(
          addressOrName: string | Promise<string>,network?: ethers.providers.Networkish, apiKey?: string, startBlock?: ethers.providers.BlockTag, endBlock?: ethers.providers.BlockTag): Promise<any> {
            return new  ethers.providers.EtherscanProvider(network, apiKey).getHistory(addressOrName, startBlock, endBlock);
          }
       //WEB3 JS

export function getAlchemyProvider(
  network: string, 
  nodeProviderApiKey: string
): ethers.providers.BaseProvider {
  return new ethers.providers.AlchemyProvider(network, nodeProviderApiKey);
}
export function getAlchemyWebSocketProvider(
  network: string, 
  nodeProviderApiKey: string
): ethers.providers.AlchemyWebSocketProvider {
  return  ethers.providers.AlchemyProvider.getWebSocketProvider(network, nodeProviderApiKey);
}

export function getAlchemySigner(
  network: string, 
  nodeProviderApiKey: string,
  address?: string
): ethers.providers.JsonRpcSigner {
  return new ethers.providers.AlchemyProvider(network, nodeProviderApiKey).getSigner(address);
}
export function getAlchemyListedAccounts(
  network: string, 
  nodeProviderApiKey: string,
 
): Promise<string[]> {
  return new ethers.providers.AlchemyProvider(network, nodeProviderApiKey).listAccounts()
}
export function getAlchemyTransaction(
  transactionHash: string | Promise<string>,
  network: string, 
  nodeProviderApiKey: string,
 
): Promise<ethers.providers.TransactionResponse> {
  return new ethers.providers.AlchemyProvider(network, nodeProviderApiKey).getTransaction(transactionHash);
}


/* --ALCHEMY
    AlchemyProvider extends UrlJsonRpcProvider {
    static getWebSocketProvider(network?: Networkish, apiKey?: any): AlchemyWebSocketProvider;
    static getApiKey(apiKey: any): any;
    static getUrl(network: Network, apiKey: string): ConnectionInfo;
    */
// The Walet is the Signer for most public works, the wallet provider provides a means for the provider to be used
// and sign transaction and send transaction
export function getWallet(network:string, nodeProviderApiKey: string ) {
  return (useInfura: boolean) => (pvtKey: string ): ethers.Wallet =>
    useInfura
      ? new ethers.Wallet(
          pvtKey,
          getInfuraProvider(network,nodeProviderApiKey) )
      : new ethers.Wallet(
          pvtKey,
          getAlchemyProvider(network, process.env.ALCHEMY_KEY as string)
        );
}

 
let pvtKey = process.env.PRIVATEKY;
      export async  function getSignerForWallet(network:string, nodeProviderApiKey: string ):Promise<string> {
        return (new ethers.Wallet(
                String(pvtKey),
                getInfuraProvider(network,nodeProviderApiKey) ).getAddress())
            
      }
      export function PopulateWalletTransaction(pvtKey:string,transaction: ethers.utils.Deferrable<ethers.providers.TransactionRequest> ){

        return new ethers.Wallet(pvtKey).populateTransaction(transaction);
      }
     
      export async function SignWalletTransaction(network:string, nodeProviderApiKey: string,transaction: TransactionRequest ) {
        return (new ethers.Wallet(
                String(pvtKey),
                getInfuraProvider(network,nodeProviderApiKey)).signTransaction(transaction));
  
                }
    

    export async function signWalletMessage(network:string, nodeProviderApiKey: string,message: string | ethers.utils.Bytes  ) {
      return (new ethers.Wallet(
              String(pvtKey),
              getInfuraProvider(network,nodeProviderApiKey)).signMessage(message));

              
  }
     export function setWalletWithMnemonic(mneumoic:string, path?:string ){

        return  ethers.Wallet.fromMnemonic(mneumoic, path); 
      }

     
                // from Mnemonic 
      export function getWalletBalanceWithMnemonic(mnemonic: string) {

        return ethers.Wallet.fromMnemonic(mnemonic).getBalance();
      }
      // With private keys
      export function getWalletWithPrivateKey(pvtKey: string ){
        return  (new ethers.Wallet(String(pvtKey)));
      }

       // With private keys
      export function getWalletWithPublicKey(publickey: string ){
      return  (new ethers.Wallet(String(pvtKey)));
      }

      
// Getting the Contract
export function ConnectToContract(
  signerOrProvider: ethers.Signer | ethers.providers.Provider
) {
  return function ConnectToContracts(
    address: string,
    abi: ethers.ContractInterface, 
    network?:ethers.providers.Networkish,apiKey?: any
  ): ethers.Contract {
    return new ethers.Contract(address, abi, signerOrProvider).connect(new ethers.providers.InfuraProvider(network,apiKey ));
  };
}

//The signer is provided and the provider is also provided
export function getContract(
    address: string,
    abi: ethers.ContractInterface,
    signerOrProvider: ethers.Signer | ethers.providers.Provider 
   
  ): ethers.Contract {
    return new ethers.Contract(address, abi, signerOrProvider);
  };

 

  interface Libraries {
    [libraryName: string]: string;
  }
  
 interface FactoryOptions {
    signer?: ethers.Signer;
    libraries?: Libraries;
  }
  

  
  interface FactoryOptions {
    signer?: ethers.Signer;
    libraries?: Libraries;
  }
  // IN THE UTILS WE ARE GOING TO KEEP ALL OUT UTILS FILES HERE

  // BUILDIING UP THE HELPERS FOR THE CONTRACTS HERE TO BE USED 
  // THE INFO FOR THE BASIC USE WILL ALWAYS COME FOR THE MAIN DOCUMENTS
  
  //WE HAVE A PRODUCTIVE MEANS OF THIS 
  export function DeployContract(contractInterface: ethers.ContractInterface, bytecode: ethers.BytesLike):Promise<ethers.Contract>{
    return new ethers.ContractFactory(contractInterface, bytecode).deploy();
  }
      
  //We can deploy directly the way we want it
export function getContractDeployed(
  address: string,
  abi: ethers.ContractInterface,
  signerOrProvider: ethers.Signer | ethers.providers.Provider 
 
): Promise<ethers.Contract>  {
  return new ethers.Contract(address, abi, signerOrProvider).deployed();
};
  

//We can deploy directly the way we want it
//The connect let's the signer create a contract from Contract Factory actually
export function getConnectContract(
  address: string,
  abi: ethers.ContractInterface,
  signerOrProvider: ethers.Signer | ethers.providers.Provider ,
  addressOrName: string,
  network:string, 
  nodeProviderApiKey: string
): ethers.Contract {
  return new ethers.Contract(address, abi, signerOrProvider).connect(getInfuraProvider(network, nodeProviderApiKey));
};

// Attach helps us to pass a particcular address to a contract
export function AttachContractToAddress(
  address: string,
  abi: ethers.ContractInterface,
  signerOrProvider: ethers.Signer | ethers.providers.Provider ,
  addressOrName: string
 
):ethers.Contract {
  return new ethers.Contract(address, abi, signerOrProvider).attach(address);
};

export function getSignerForContract(
  address: string,
  abi: ethers.ContractInterface,
  signerOrProvider: ethers.Signer | ethers.providers.Provider ,
  addressOrName: string
 
):ethers.Signer {
  return new ethers.Contract(address, abi, signerOrProvider).attach(address).signer;
};

export function getProviderInfoForTheContract(
  address: string,
  abi: ethers.ContractInterface,
  signerOrProvider: ethers.Signer | ethers.providers.Provider ,
  addressOrName: string
 
):ethers.providers.Provider {
  return new ethers.Contract(address, abi, signerOrProvider).attach(address).provider;
};

export function getDeployedTransationInf(
  address: string,
  abi: ethers.ContractInterface,
  signerOrProvider: ethers.Signer | ethers.providers.Provider ,
  addressOrName: string
  
):ethers.providers.TransactionResponse {
  return new ethers.Contract(address, abi, signerOrProvider).attach(address).deployTransaction;
};


export function getContractEventWithListener(
  address: string,
  abi: ethers.ContractInterface,
  signerOrProvider: ethers.Signer | ethers.providers.Provider ,

  event: ethers.EventFilter | string, listener: ethers.providers.Listener
):ethers.Contract {
  return new ethers.Contract(address, abi, signerOrProvider).on(event,listener);
};

export function getContractEmmittedWithListener(
  address: string,
  abi: ethers.ContractInterface,
  signerOrProvider: ethers.Signer | ethers.providers.Provider ,

  emit: ethers.EventFilter | string, listener: ethers.providers.Listener
):ethers.Contract {
  return new ethers.Contract(address, abi, signerOrProvider).on(emit, listener);
};



export function getDeployedTransactionForContractFactory(contractInterface: ethers.ContractInterface, bytecode: ethers.BytesLike, ...args:Array<any>){
  return new ethers.ContractFactory(contractInterface, bytecode).getDeployTransaction(...args);
}
  

      



//
  // FROM ABSTRACT.JS
          /*

          import { BaseContract, Contract, ContractFactory } from "@ethersproject/contracts";
import { BigNumber, FixedNumber } from "@ethersproject/bignumber";
import { Signer, VoidSigner } from "@ethersproject/abstract-signer";
import { Wallet } from "@ethersproject/wallet";
import * as constants from "@ethersproject/constants";
import * as providers from "@ethersproject/providers";
import { getDefaultProvider } from "@ethersproject/providers";
import { Wordlist, wordlists } from "@ethersproject/wordlists";
import * as utils from "./utils";
import { ErrorCode as errors } from "@ethersproject/logger";
import { BigNumberish } from "@ethersproject/bignumber";
import { Bytes, BytesLike, Signature } from "@ethersproject/bytes";
import { Transaction, UnsignedTransaction } from "@ethersproject/transactions";
import { version } from "./_version";
declare const logger: utils.Logger;
import { ContractFunction, ContractReceipt, ContractTransaction, Event, EventFilter, Overrides, PayableOverrides, CallOverrides, PopulatedTransaction, ContractInterface } from "@ethersproject/contracts";
export { Signer, Wallet, VoidSigner, getDefaultProvider, providers, BaseContract, Contract, ContractFactory, BigNumber, FixedNumber, constants, errors, logger, utils, wordlists, version, ContractFunction, ContractReceipt, ContractTransaction, Event, EventFilter, Overrides, PayableOverrides, CallOverrides, PopulatedTransaction, ContractInterface, BigNumberish, Bytes, BytesLike, Signature, Transaction, UnsignedTransaction, Wordlist };
//# sourceMappingURL=ethers.d.ts.map
*/

//  FROM ETHER.JS UTILS
/*
import * as ethers from "./ethers";
export { ethers };
export { Signer, Wallet, VoidSigner, getDefaultProvider, providers, BaseContract, Contract, ContractFactory, BigNumber, FixedNumber, constants, errors, logger, utils, wordlists, version, ContractFunction, ContractReceipt, ContractTransaction, Event, EventFilter, Overrides, PayableOverrides, CallOverrides, PopulatedTransaction, ContractInterface, BigNumberish, Bytes, BytesLike, Signature, Transaction, UnsignedTransaction, Wordlist } from "./ethers";
*/

/*
export declare abstract class Signer {
  readonly provider?: Provider;
  abstract getAddress(): Promise<string>;
  abstract signMessage(message: Bytes | string): Promise<string>;
  abstract signTransaction(transaction: Deferrable<TransactionRequest>): Promise<string>;
  abstract connect(provider: Provider): Signer;
  readonly _isSigner: boolean;
  constructor();
  getBalance(blockTag?: BlockTag): Promise<BigNumber>;
  getTransactionCount(blockTag?: BlockTag): Promise<number>;
  estimateGas(transaction: Deferrable<TransactionRequest>): Promise<BigNumber>;
  call(transaction: Deferrable<TransactionRequest>, blockTag?: BlockTag): Promise<string>;
  sendTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionResponse>;
  getChainId(): Promise<number>;
  getGasPrice(): Promise<BigNumber>;
  getFeeData(): Promise<FeeData>;
  resolveName(name: string): Promise<string>;
  checkTransaction(transaction: Deferrable<TransactionRequest>): Deferrable<TransactionRequest>;
  populateTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionRequest>;
  _checkProvider(operation?: string): void;
  static isSigner(value: any): value is Signer;
}
export declare class VoidSigner extends Signer implements TypedDataSigner {
  readonly address: string;
  constructor(address: string, provider?: Provider);
  getAddress(): Promise<string>;
  _fail(message: string, operation: string): Promise<any>;
  signMessage(message: Bytes | string): Promise<string>;
  signTransaction(transaction: Deferrable<TransactionRequest>): Promise<string>;
  _signTypedData(domain: TypedDataDomain, types: Record<string, Array<TypedDataField>>, value: Record<string, any>): Promise<string>;
  connect(provider: Provider): VoidSigner;

}
*/

//We cant access the Signer directly only the Wallet


    
  
  

  // getWalletMneumonic
  // getWallet Addrss
  // getWallet prpivateey
  // getWallet SignMessage
      
     //Signer

    

       
  // Get ContractIssues

  //getContract Issues

  // getContractFactory
  // ContractFactoryDeployTransactions


  // Api Providers issue
//Homestead (Mainnet)
//Ropsten (proof-of-work testnet)
//Rinkeby (proof-of-authority testnet)
//Görli (clique testnet)
//Kova

 




/* 
--ETHERSCAN AND OTHER API-PROVIDERS--
// Connect to mainnet (homestead)
provider = new EtherscanProvider();

// Connect to rinkeby testnet (these are equivalent)
provider = new EtherscanProvider("rinkeby");
provider = new EtherscanProvider(4);

network = ethers.providers.getNetwork("rinkeby");
// {
//   chainId: 4,
//   ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
//   name: 'rinkeby'
// }

provider = new EtherscanProvider(network);

// Connect to mainnet (homestead) with an API key
provider = new EtherscanProvider(null, apiKey);
provider = new EtherscanProvider("homestead", apiKey);

*/

/*

 -- API PROVIDER---
// Connect to mainnet (homestead)
provider = new InfuraProvider();

// Connect to the ropsten testnet
// (see EtherscanProvider above for other network examples)
provider = new InfuraProvider("ropsten");

// Connect to mainnet with a Project ID (these are equivalent)
provider = new InfuraProvider(null, projectId);
provider = new InfuraProvider("homestead", projectId);

// Connect to mainnet with a Project ID and Project Secret
provider = new InfuraProvider("homestead", {
    projectId: projectId,
    projectSecret: projectSecret
});

// Connect to the INFURA WebSocket endpoints with a WebSocketProvider
provider = InfuraProvider.getWebSocketProvider()*/

/* 

---WALLET--
/ Create a wallet instance from a mnemonic...
mnemonic = "announce room limb pattern dry unit scale effort smooth jazz weasel alcohol"
walletMnemonic = Wallet.fromMnemonic(mnemonic)

// ...or from a private key
walletPrivateKey = new Wallet(walletMnemonic.privateKey)

walletMnemonic.address === walletPrivateKey.address
// true

// The address as a Promise per the Signer API
await walletMnemonic.getAddress()
// '0x71CB05EE1b1F506fF321Da3dac38f25c0c9ce6E1'

// A Wallet address is also available synchronously
walletMnemonic.address
// '0x71CB05EE1b1F506fF321Da3dac38f25c0c9ce6E1'

// The internal cryptographic components
walletMnemonic.privateKey
// '0x1da6847600b0ee25e9ad9a52abbd786dd2502fa4005dd5af9310b7cc7a3b25db'
walletMnemonic.publicKey
// '0x04b9e72dfd423bcf95b3801ac93f4392be5ff22143f9980eb78b3a860c4843bfd04829ae61cdba4b3b1978ac5fc64f5cc2f4350e35a108a9c9a92a81200a60cd64'

// The wallet mnemonic
walletMnemonic.mnemonic
// {
//   locale: 'en',
//   path: "m/44'/60'/0'/0/0",
//   phrase: 'announce room limb pattern dry unit scale effort smooth jazz weasel alcohol'
// }

// Note: A wallet created with a private key does not
//       have a mnemonic (the derivation prevents it)
walletPrivateKey.mnemonic
// null

// Signing a message
await walletMnemonic.signMessage("Hello World")
// '0x14280e5885a19f60e536de50097e96e3738c7acae4e9e62d67272d794b8127d31c03d9cd59781d4ee31fb4e1b893bd9b020ec67dfa65cfb51e2bdadbb1de26d91c'

tx = {
  to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
  value: utils.parseEther("1.0")
}

// Signing a transaction
await walletMnemonic.signTransaction(tx)
// '0xf865808080948ba1f109551bd432803012645ac136ddd64dba72880de0b6b3a7640000801ca0918e294306d177ab7bd664f5e141436563854ebe0a3e523b9690b4922bbb52b8a01181612cec9c431c4257a79b8c9f0c980a2c49bb5a0e6ac52949163eeb565dfc'

// The connect method returns a new instance of the
// Wallet connected to a provider
wallet = walletMnemonic.connect(provider)

// Querying the network
await wallet.getBalance();
// { BigNumber: "42" }
await wallet.getTransactionCount();
// 0

// Sending ether
await wallet.sendTransaction(tx)
// {
//   chainId: 1337,
//   confirmations: 0,
//   data: '0x',
//   from: '0x91AD9E4649DEe0C5d61804Fb7e733Fe41255262d',
//   gasLimit: { BigNumber: "21000" },
//   gasPrice: { BigNumber: "1" },
//   hash: '0x3bead3adbb7760d657e1b90fd41a67b2dc642f9b627308877f522da92a3ed0da',
//   nonce: 5,
//   r: '0x63b6bfb4971ff38cef85708f824339ee16af60648f6218650ee5537c852a9ea4',
//   s: '0x5e684389c85ffe37f106020280ccc06856cccd7faa162ad0b036efee7b517f21',
//   to: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
//   type: null,
//   v: 2710,
//   value: { BigNumber: "1000000000000000000" },
//   wait: [Function]
// }
*/

/*
--PULLING FROM THE BALANCE ADDRESS--
address = "0x8ba1f109551bD432803012645Ac136ddd64DBA72"
signer = new ethers.VoidSigner(address, provider)

// The DAI token contract
abi = [
  "function balanceOf(address) view returns (uint)",
  "function transfer(address, uint) returns (bool)"
]
contract = new ethers.Contract("dai.tokens.ethers.eth", abi, signer)

// Get the number of tokens for this account
tokens = await contract.balanceOf(signer.getAddress())
// { BigNumber: "14499579074838529727100" }

//
// Pre-flight (check for revert) on DAI from the signer
//
// Note: We do not have the private key at this point, this
//       simply allows us to check what would happen if we
//       did. This can be useful to check before prompting
//       a request in the UI
//

// This will pass since the token balance is available
await contract.callStatic.transfer("donations.ethers.eth", tokens)
// true

// This will fail since it is greater than the token balance
await contract.callStatic.transfer("donations.ethers.eth", tokens.add(1))
// [Error: call revert exception] {
//   address: 'dai.tokens.ethers.eth',
//   args: [
//     'donations.ethers.eth',
//     { BigNumber: "14499579074838529727101" }
//   ],
//   code: 'CALL_EXCEPTION',
//   errorArgs: [
//     'Dai/insufficient-balance'
//   ],
//   errorName: 'Error',
//   errorSignature: 'Error(string)',
//   method: 'transfer(address,uint256)',
//   reason: 'Dai/insufficient-balance',
//   transaction: {
//     data: '0xa9059cbb000000000000000000000000ea517d5a070e6705cc5467858681ed953d285eb90000000000000000000000000000000000000000000003120614ea80d59a5a7d',
//     from: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
//     to: '0x6B175474E89094C44Da98b954EedeAC495271d0F'
//   }
// }
*/



//---THE CONTRACT HERE --
/*
    constructor(addressOrName: string, contractInterface: ContractInterface, signerOrProvider?: Signer | Provider);
    static getContractAddress(transaction: {
        from: string;
        nonce: BigNumberish;
    }): string;
    static getInterface(contractInterface: ContractInterface): Interface;
    deployed(): Promise<Contract>;
    _deployed(blockTag?: BlockTag): Promise<Contract>;
    fallback(overrides?: TransactionRequest): Promise<TransactionResponse>;
    connect(signerOrProvider: Signer | Provider | string): Contract;
    attach(addressOrName: string): Contract;
    static isIndexed(value: any): value is Indexed;
    private _normalizeRunningEvent;
    private _getRunningEvent;
    _checkRunningEvents(runningEvent: RunningEvent): void;
    _wrapEvent(runningEvent: RunningEvent, log: Log, listener: Listener): Event;
    private _addEventListener;
    queryFilter(event: EventFilter, fromBlockOrBlockhash?: BlockTag | string, toBlock?: BlockTag): Promise<Array<Event>>;
    on(event: EventFilter | string, listener: Listener): this;
    once(event: EventFilter | string, listener: Listener): this;
    emit(eventName: EventFilter | string, ...args: Array<any>): boolean;
    listenerCount(eventName?: EventFilter | string): number;
    listeners(eventName?: EventFilter | string): Array<Listener>;
    removeAllListeners(eventName?: EventFilter | string): this;
    off(eventName: EventFilter | string, listener: Listener): this;
    removeListener(eventName: EventFilter | string, listener: Listener): this;
}
export declare class Contract extends BaseContract {
    readonly [key: string]: ContractFunction | any;
}
export declare class ContractFactory {
    readonly interface: Interface;
    readonly bytecode: string;
    readonly signer: Signer;
    constructor(contractInterface: ContractInterface, bytecode: BytesLike | {
        object: string;
    }, signer?: Signer);
    getDeployTransaction(...args: Array<any>): TransactionRequest;
    deploy(...args: Array<any>): Promise<Contract>;
    attach(address: string): Contract;
    connect(signer: Signer): ContractFactory;
    static fromSolidity(compilerOutput: any, signer?: Signer): ContractFactory;
    static getInterface(contractInterface: ContractInterface): Interface;
    static getContractAddress(tx: {
        from: string;
        nonce: BytesLike | BigNumber | number;
    }): string;
    static getContract(address: string, contractInterface: ContractInterface, signer?: Signer): Contract;
}
export {};
*/

//--BASE PROVIDERS--

/*    constructor(network: Networkish | Promise<Network>);
    _ready(): Promise<Network>;
    get ready(): Promise<Network>;
    static getFormatter(): Formatter;
    static getNetwork(network: Networkish): Network;
    _getInternalBlockNumber(maxAge: number): Promise<number>;
    poll(): Promise<void>;
    resetEventsBlock(blockNumber: number): void;
    get network(): Network;
    detectNetwork(): Promise<Network>;
    getNetwork(): Promise<Network>;
    get blockNumber(): number;
    get polling(): boolean;
    set polling(value: boolean);
    get pollingInterval(): number;
    set pollingInterval(value: number);
    _getFastBlockNumber(): Promise<number>;
    _setFastBlockNumber(blockNumber: number): void;
    waitForTransaction(transactionHash: string, confirmations?: number, timeout?: number): Promise<TransactionReceipt>;
    _waitForTransaction(transactionHash: string, confirmations: number, timeout: number, replaceable: {
        data: string;
        from: string;
        nonce: number;
        to: string;
        value: BigNumber;
        startBlock: number;
    }): Promise<TransactionReceipt>;
    getBlockNumber(): Promise<number>;
    getGasPrice(): Promise<BigNumber>;
    getBalance(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag>): Promise<BigNumber>;
    getTransactionCount(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag>): Promise<number>;
    getCode(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag>): Promise<string>;
    getStorageAt(addressOrName: string | Promise<string>, position: BigNumberish | Promise<BigNumberish>, blockTag?: BlockTag | Promise<BlockTag>): Promise<string>;
    _wrapTransaction(tx: Transaction, hash?: string, startBlock?: number): TransactionResponse;
    sendTransaction(signedTransaction: string | Promise<string>): Promise<TransactionResponse>;
    _getTransactionRequest(transaction: Deferrable<TransactionRequest>): Promise<Transaction>;
    _getFilter(filter: Filter | FilterByBlockHash | Promise<Filter | FilterByBlockHash>): Promise<Filter | FilterByBlockHash>;
    call(transaction: Deferrable<TransactionRequest>, blockTag?: BlockTag | Promise<BlockTag>): Promise<string>;
    estimateGas(transaction: Deferrable<TransactionRequest>): Promise<BigNumber>;
    _getAddress(addressOrName: string | Promise<string>): Promise<string>;
    _getBlock(blockHashOrBlockTag: BlockTag | string | Promise<BlockTag | string>, includeTransactions?: boolean): Promise<Block | BlockWithTransactions>;
    getBlock(blockHashOrBlockTag: BlockTag | string | Promise<BlockTag | string>): Promise<Block>;
    getBlockWithTransactions(blockHashOrBlockTag: BlockTag | string | Promise<BlockTag | string>): Promise<BlockWithTransactions>;
    getTransaction(transactionHash: string | Promise<string>): Promise<TransactionResponse>;
    getTransactionReceipt(transactionHash: string | Promise<string>): Promise<TransactionReceipt>;
    getLogs(filter: Filter | FilterByBlockHash | Promise<Filter | FilterByBlockHash>): Promise<Array<Log>>;
    getEtherPrice(): Promise<number>;
    _getBlockTag(blockTag: BlockTag | Promise<BlockTag>): Promise<BlockTag>;
    getResolver(name: string): Promise<Resolver>;
    _getResolver(name: string): Promise<string>;
    resolveName(name: string | Promise<string>): Promise<string>;
    lookupAddress(address: string | Promise<string>): Promise<string>;
    perform(method: string, params: any): Promise<any>;
    _startEvent(event: Event): void;
    _stopEvent(event: Event): void;
    _addEventListener(eventName: EventType, listener: Listener, once: boolean): this;
    on(eventName: EventType, listener: Listener): this;
    once(eventName: EventType, listener: Listener): this;
    emit(eventName: EventType, ...args: Array<any>): boolean;
    listenerCount(eventName?: EventType): number;
    listeners(eventName?: EventType): Array<Listener>;
    off(eventName: EventType, listener?: Listener): this;
    removeAllListeners(eventName?: EventType): this;*/

    /* --ALCHEMY
    AlchemyProvider extends UrlJsonRpcProvider {
    static getWebSocketProvider(network?: Networkish, apiKey?: any): AlchemyWebSocketProvider;
    static getApiKey(apiKey: any): any;
    static getUrl(network: Network, apiKey: string): ConnectionInfo;
    */

   
   
     
    /* 
    export declare class InfuraProvider extends UrlJsonRpcProvider {
    readonly projectId: string;
    readonly projectSecret: string;
    static getWebSocketProvider(network?: Networkish, apiKey?: any): InfuraWebSocketProvider;
    static getApiKey(apiKey: any): any;
    static getUrl(network: Network, apiKey: any): ConnectionInfo;
    isCommunityResource(): boolean;
    */

    /*
    export declare class Web3Provider extends JsonRpcProvider {
    readonly provider: ExternalProvider;
    readonly jsonRpcFetchFunc: JsonRpcFetchFunc;
    constructor(provider: ExternalProvider | JsonRpcFetchFunc, network?: Networkish);
    send(method: string, params: Array<any>): Promise<any>;
}
    */

/* class EtherscanProvider extends BaseProvider {
    readonly baseUrl: string;
    readonly apiKey: string;
    constructor(network?: Networkish, apiKey?: string);
    getBaseUrl(): string;
    getUrl(module: string, params: Record<string, string>): string;
    getPostUrl(): string;
    getPostData(module: string, params: Record<string, any>): Record<string, any>;
    fetch(module: string, params: Record<string, any>, post?: boolean): Promise<any>;
    detectNetwork(): Promise<Network>;
    perform(method: string, params: any): Promise<any>;
    getHistory(addressOrName: string | Promise<string>, startBlock?: BlockTag, endBlock?: BlockTag): Promise<Array<TransactionResponse>>;
    isCommunityResource(): boolean;*/
  