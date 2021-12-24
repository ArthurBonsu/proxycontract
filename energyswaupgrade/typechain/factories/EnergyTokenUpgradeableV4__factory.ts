/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EnergyTokenUpgradeableV4,
  EnergyTokenUpgradeableV4Interface,
} from "../EnergyTokenUpgradeableV4";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "__owner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280600c81526020017f454e45524759544f4b454e530000000000000000000000000000000000000000815250609a908051906020019062000051929190620000b4565b506040518060400160405280600381526020017f454e470000000000000000000000000000000000000000000000000000000000815250609b90805190602001906200009f929190620000b4565b50348015620000ad57600080fd5b50620001c9565b828054620000c29062000164565b90600052602060002090601f016020900481019282620000e6576000855562000132565b82601f106200010157805160ff191683800117855562000132565b8280016001018555821562000132579182015b828111156200013157825182559160200191906001019062000114565b5b50905062000141919062000145565b5090565b5b808211156200016057600081600090555060010162000146565b5090565b600060028204905060018216806200017d57607f821691505b602082108114156200019457620001936200019a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b61200880620001d96000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063715018a611610097578063a9059cbb11610066578063a9059cbb1461028a578063c4d66de8146102ba578063dd62ed3e146102d6578063f2fde38b14610306576100f5565b8063715018a6146102145780638da5cb5b1461021e57806395d89b411461023c578063a457c2d71461025a576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806370a08231146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610322565b60405161010f91906119c8565b60405180910390f35b610132600480360381019061012d91906117a6565b6103b4565b60405161013f91906119ad565b60405180910390f35b6101506103d2565b60405161015d9190611b0a565b60405180910390f35b610180600480360381019061017b9190611757565b6103dc565b60405161018d91906119ad565b60405180910390f35b61019e6104b5565b6040516101ab9190611b25565b60405180910390f35b6101ce60048036038101906101c991906117a6565b6104be565b6040516101db91906119ad565b60405180910390f35b6101fe60048036038101906101f991906116f2565b61056a565b60405161020b9190611b0a565b60405180910390f35b61021c6105b3565b005b61022661063b565b6040516102339190611992565b60405180910390f35b610244610665565b60405161025191906119c8565b60405180910390f35b610274600480360381019061026f91906117a6565b6106f7565b60405161028191906119ad565b60405180910390f35b6102a4600480360381019061029f91906117a6565b6107e2565b6040516102b191906119ad565b60405180910390f35b6102d460048036038101906102cf91906116f2565b610800565b005b6102f060048036038101906102eb919061171b565b610a89565b6040516102fd9190611b0a565b60405180910390f35b610320600480360381019061031b91906116f2565b610b10565b005b60606068805461033190611c3a565b80601f016020809104026020016040519081016040528092919081815260200182805461035d90611c3a565b80156103aa5780601f1061037f576101008083540402835291602001916103aa565b820191906000526020600020905b81548152906001019060200180831161038d57829003601f168201915b5050505050905090565b60006103c86103c1610c08565b8484610c10565b6001905092915050565b6000609954905090565b60006103e9848484610ddb565b6104aa846103f5610c08565b6104a585604051806060016040528060288152602001611fab60289139609860008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061045b610c08565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461105f9092919063ffffffff16565b610c10565b600190509392505050565b60006012905090565b60006105606104cb610c08565b8484606660006104d9610c08565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461055b9190611b5c565b610c10565b6001905092915050565b6000609760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6105bb610c08565b73ffffffffffffffffffffffffffffffffffffffff166105d961063b565b73ffffffffffffffffffffffffffffffffffffffff161461062f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062690611a8a565b60405180910390fd5b61063960006110b4565b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606069805461067490611c3a565b80601f01602080910402602001604051908101604052809291908181526020018280546106a090611c3a565b80156106ed5780601f106106c2576101008083540402835291602001916106ed565b820191906000526020600020905b8154815290600101906020018083116106d057829003601f168201915b5050505050905090565b60008060666000610706610c08565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156107c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ba90611aea565b60405180910390fd5b6107d76107ce610c08565b85858403610c10565b600191505092915050565b60006107f66107ef610c08565b8484610ddb565b6001905092915050565b600060019054906101000a900460ff1680610826575060008054906101000a900460ff16155b610865576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085c90611a6a565b60405180910390fd5b60008060019054906101000a900460ff1615905080156108b5576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6108bd61117a565b6109db609a80546108cd90611c3a565b80601f01602080910402602001604051908101604052809291908181526020018280546108f990611c3a565b80156109465780601f1061091b57610100808354040283529160200191610946565b820191906000526020600020905b81548152906001019060200180831161092957829003601f168201915b5050505050609b805461095890611c3a565b80601f016020809104026020016040519081016040528092919081815260200182805461098490611c3a565b80156109d15780601f106109a6576101008083540402835291602001916109d1565b820191906000526020600020905b8154815290600101906020018083116109b457829003601f168201915b5050505050611263565b6109e361063b565b609c60016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081609c60016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508015610a855760008060016101000a81548160ff0219169083151502179055505b5050565b6000609860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610b18610c08565b73ffffffffffffffffffffffffffffffffffffffff16610b3661063b565b73ffffffffffffffffffffffffffffffffffffffff1614610b8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8390611a8a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610bfc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf390611a0a565b60405180910390fd5b610c05816110b4565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7790611aca565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cf0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce790611a2a565b60405180910390fd5b80606660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610dce9190611b0a565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4290611aaa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ebb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb2906119ea565b60405180910390fd5b610ec6838383611350565b6000606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610f4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4490611a4a565b60405180910390fd5b818103606560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fe29190611b5c565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110469190611b0a565b60405180910390a3611059848484611355565b50505050565b60008383111582906110a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109e91906119c8565b60405180910390fd5b5082840390509392505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600060019054906101000a900460ff16806111a0575060008054906101000a900460ff16155b6111df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d690611a6a565b60405180910390fd5b60008060019054906101000a900460ff16159050801561122f576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61123761135a565b61123f611433565b80156112605760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611289575060008054906101000a900460ff16155b6112c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112bf90611a6a565b60405180910390fd5b60008060019054906101000a900460ff161590508015611318576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61132061135a565b61132a838361151c565b801561134b5760008060016101000a81548160ff0219169083151502179055505b505050565b505050565b505050565b600060019054906101000a900460ff1680611380575060008054906101000a900460ff16155b6113bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113b690611a6a565b60405180910390fd5b60008060019054906101000a900460ff16159050801561140f576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156114305760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611459575060008054906101000a900460ff16155b611498576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148f90611a6a565b60405180910390fd5b60008060019054906101000a900460ff1615905080156114e8576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6114f86114f3610c08565b6110b4565b80156115195760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611542575060008054906101000a900460ff16155b611581576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157890611a6a565b60405180910390fd5b60008060019054906101000a900460ff1615905080156115d1576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b82606890805190602001906115e7929190611625565b5081606990805190602001906115fe929190611625565b5080156116205760008060016101000a81548160ff0219169083151502179055505b505050565b82805461163190611c3a565b90600052602060002090601f016020900481019282611653576000855561169a565b82601f1061166c57805160ff191683800117855561169a565b8280016001018555821561169a579182015b8281111561169957825182559160200191906001019061167e565b5b5090506116a791906116ab565b5090565b5b808211156116c45760008160009055506001016116ac565b5090565b6000813590506116d781611f7c565b92915050565b6000813590506116ec81611f93565b92915050565b60006020828403121561170457600080fd5b6000611712848285016116c8565b91505092915050565b6000806040838503121561172e57600080fd5b600061173c858286016116c8565b925050602061174d858286016116c8565b9150509250929050565b60008060006060848603121561176c57600080fd5b600061177a868287016116c8565b935050602061178b868287016116c8565b925050604061179c868287016116dd565b9150509250925092565b600080604083850312156117b957600080fd5b60006117c7858286016116c8565b92505060206117d8858286016116dd565b9150509250929050565b6117eb81611bb2565b82525050565b6117fa81611bc4565b82525050565b600061180b82611b40565b6118158185611b4b565b9350611825818560208601611c07565b61182e81611cca565b840191505092915050565b6000611846602383611b4b565b915061185182611cdb565b604082019050919050565b6000611869602683611b4b565b915061187482611d2a565b604082019050919050565b600061188c602283611b4b565b915061189782611d79565b604082019050919050565b60006118af602683611b4b565b91506118ba82611dc8565b604082019050919050565b60006118d2602e83611b4b565b91506118dd82611e17565b604082019050919050565b60006118f5602083611b4b565b915061190082611e66565b602082019050919050565b6000611918602583611b4b565b915061192382611e8f565b604082019050919050565b600061193b602483611b4b565b915061194682611ede565b604082019050919050565b600061195e602583611b4b565b915061196982611f2d565b604082019050919050565b61197d81611bf0565b82525050565b61198c81611bfa565b82525050565b60006020820190506119a760008301846117e2565b92915050565b60006020820190506119c260008301846117f1565b92915050565b600060208201905081810360008301526119e28184611800565b905092915050565b60006020820190508181036000830152611a0381611839565b9050919050565b60006020820190508181036000830152611a238161185c565b9050919050565b60006020820190508181036000830152611a438161187f565b9050919050565b60006020820190508181036000830152611a63816118a2565b9050919050565b60006020820190508181036000830152611a83816118c5565b9050919050565b60006020820190508181036000830152611aa3816118e8565b9050919050565b60006020820190508181036000830152611ac38161190b565b9050919050565b60006020820190508181036000830152611ae38161192e565b9050919050565b60006020820190508181036000830152611b0381611951565b9050919050565b6000602082019050611b1f6000830184611974565b92915050565b6000602082019050611b3a6000830184611983565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611b6782611bf0565b9150611b7283611bf0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611ba757611ba6611c6c565b5b828201905092915050565b6000611bbd82611bd0565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611c25578082015181840152602081019050611c0a565b83811115611c34576000848401525b50505050565b60006002820490506001821680611c5257607f821691505b60208210811415611c6657611c65611c9b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b611f8581611bb2565b8114611f9057600080fd5b50565b611f9c81611bf0565b8114611fa757600080fd5b5056fe45524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365a264697066735822122001385b44ff10895d1db25b29ffc71a0f275d9b17b206f42e737cad196b5a0e4164736f6c63430008020033";

export class EnergyTokenUpgradeableV4__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EnergyTokenUpgradeableV4> {
    return super.deploy(overrides || {}) as Promise<EnergyTokenUpgradeableV4>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EnergyTokenUpgradeableV4 {
    return super.attach(address) as EnergyTokenUpgradeableV4;
  }
  connect(signer: Signer): EnergyTokenUpgradeableV4__factory {
    return super.connect(signer) as EnergyTokenUpgradeableV4__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EnergyTokenUpgradeableV4Interface {
    return new utils.Interface(_abi) as EnergyTokenUpgradeableV4Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EnergyTokenUpgradeableV4 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EnergyTokenUpgradeableV4;
  }
}
