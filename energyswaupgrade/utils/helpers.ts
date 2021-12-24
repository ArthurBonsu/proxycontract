//import { Signer, } from "@ethersproject/abstract-signer";
import { TransactionRequest } from "@ethersproject/abstract-provider";
import { Signer } from "crypto";
import "dotenv/config";
import { ethers } from "ethers";
import path from "path";
import { getSignatureForFn } from "typechain";



// We can get so many things from the providers such as receipts,balance, blocknumer, transactions and other relevant info
//from the system if we want more details. just put a dot there from the InfuraProvider point or any other provider

let prefixedpvtkey = String(process.env.PREFIXEDPRIVATEKEY); 
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



// The Walet is the Signer for most public works, the wallet provider provides a means for the provider to be used
// and sign transaction and send transaction
export function getWallet(prefixedpvtkey: string,network:string, nodeProviderApiKey: string ) {
  return (useInfura: boolean) => (pvtkey: string ): ethers.Wallet =>
    useInfura
      ? new ethers.Wallet(
        prefixedpvtkey,
          getInfuraProvider(network,nodeProviderApiKey) )
      : new ethers.Wallet(
        prefixedpvtkey,
          getAlchemyProvider(network, process.env.ALCHEMY_KEY as string)
        );
}

 
export function getWalletForInfura(prefixedpvtkey: string, network:string, nodeProviderApiKey: string ) {
  return new ethers.Wallet(
        prefixedpvtkey,
          getInfuraProvider(network,nodeProviderApiKey) );
  }

 
  
      export async  function getSignerForWallet(prefixedpvtkey: string,network:string, nodeProviderApiKey: string ): Promise<string> {
        return (new ethers.Wallet(
          prefixedpvtkey,
                getInfuraProvider(network,nodeProviderApiKey))).address
        }
      


      export function PopulateWalletTransaction(prefixedpvtkey: string,transaction: ethers.utils.Deferrable<ethers.providers.TransactionRequest> ){

        return new ethers.Wallet(prefixedpvtkey).populateTransaction(transaction);
      }
     
      export async function SignWalletTransaction(prefixedpvtkey: string,network:string, nodeProviderApiKey: string,transaction: TransactionRequest ) {
        return (new ethers.Wallet(
          prefixedpvtkey,
                getInfuraProvider(network,nodeProviderApiKey)).signTransaction(transaction));
  
                }
        

    export async function signWalletMessage(prefixedpvtkey: string, network:string, nodeProviderApiKey: string,message: string | ethers.utils.Bytes  ) {
      return (new ethers.Wallet(
        prefixedpvtkey,
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
      export function getWalletWithPrivateKey(prefixedpvtkey: string ){
        return  (new ethers.Wallet(prefixedpvtkey));
      }

       // With private keys
      export function getWalletWithPublicKey(publickey: string ){
      return  (new ethers.Wallet(prefixedpvtkey));
      }

      
// Getting the Contract

  export  function ConnectToContract(
    address: string,
    abi: ethers.ContractInterface, 
    signerOrProvider: ethers.Signer | ethers.providers.Provider,
    network?:ethers.providers.Networkish,apiKey?: any,
     
  ): ethers.Contract {
    return new ethers.Contract(address, abi, signerOrProvider).connect(new ethers.providers.InfuraProvider(network,apiKey ));
  };


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
  

      
