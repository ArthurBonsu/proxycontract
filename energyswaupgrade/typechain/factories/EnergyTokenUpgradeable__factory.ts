/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EnergyTokenUpgradeable,
  EnergyTokenUpgradeableInterface,
} from "../EnergyTokenUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_adminset",
        type: "address",
      },
    ],
    name: "Adminset",
    type: "event",
  },
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
        name: "_energyid",
        type: "address",
      },
    ],
    name: "energyidset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
    inputs: [
      {
        internalType: "address",
        name: "__owner",
        type: "address",
      },
    ],
    name: "ownerpick",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b50611e90806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d7146102b1578063a9059cbb146102e1578063dd62ed3e14610311578063f2fde38b1461034157610100565b806370a082311461023b578063715018a61461026b5780638da5cb5b1461027557806395d89b411461029357610100565b806318160ddd116100d357806318160ddd1461019f57806323b872dd146101bd578063313ce567146101ed578063395093511461020b57610100565b806306fdde0314610105578063095ea7b3146101235780630f44b4c91461015357806311d1bb581461016f575b600080fd5b61010d61035d565b60405161011a9190611850565b60405180910390f35b61013d6004803603810190610138919061162e565b6103ef565b60405161014a9190611835565b60405180910390f35b61016d6004803603810190610168919061157a565b61040d565b005b6101896004803603810190610184919061157a565b610686565b604051610196919061181a565b60405180910390f35b6101a7610690565b6040516101b49190611992565b60405180910390f35b6101d760048036038101906101d291906115df565b61069a565b6040516101e49190611835565b60405180910390f35b6101f5610798565b60405161020291906119ad565b60405180910390f35b6102256004803603810190610220919061162e565b6107a1565b6040516102329190611835565b60405180910390f35b6102556004803603810190610250919061157a565b61084d565b6040516102629190611992565b60405180910390f35b610273610896565b005b61027d61091e565b60405161028a919061181a565b60405180910390f35b61029b610948565b6040516102a89190611850565b60405180910390f35b6102cb60048036038101906102c6919061162e565b6109da565b6040516102d89190611835565b60405180910390f35b6102fb60048036038101906102f6919061162e565b610ac5565b6040516103089190611835565b60405180910390f35b61032b600480360381019061032691906115a3565b610ae3565b6040516103389190611992565b60405180910390f35b61035b6004803603810190610356919061157a565b610b6a565b005b60606068805461036c90611ac2565b80601f016020809104026020016040519081016040528092919081815260200182805461039890611ac2565b80156103e55780601f106103ba576101008083540402835291602001916103e5565b820191906000526020600020905b8154815290600101906020018083116103c857829003601f168201915b5050505050905090565b60006104036103fc610c62565b8484610c6a565b6001905092915050565b61041561091e565b609c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080609c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060400160405280600c81526020017f454e45524759544f4b454e530000000000000000000000000000000000000000815250609a90805190602001906104e19291906114ad565b506040518060400160405280600381526020017f454e470000000000000000000000000000000000000000000000000000000000815250609b908051906020019061052d9291906114ad565b5061064c609a805461053e90611ac2565b80601f016020809104026020016040519081016040528092919081815260200182805461056a90611ac2565b80156105b75780601f1061058c576101008083540402835291602001916105b7565b820191906000526020600020905b81548152906001019060200180831161059a57829003601f168201915b5050505050609b80546105c990611ac2565b80601f01602080910402602001604051908101604052809291908181526020018280546105f590611ac2565b80156106425780601f1061061757610100808354040283529160200191610642565b820191906000526020600020905b81548152906001019060200180831161062557829003601f168201915b5050505050610e35565b7f52454b5ea0ab0bb9d4c18ab97c144423198d68d685e9214879a694d252ee82798160405161067b919061181a565b60405180910390a150565b6000819050919050565b6000609954905090565b6000609c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1693506106cc848484610f22565b61078d846106d8610c62565b61078885604051806060016040528060288152602001611e3360289139609860008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061073e610c62565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111a69092919063ffffffff16565b610c6a565b600190509392505050565b60006012905090565b60006108436107ae610c62565b8484606660006107bc610c62565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461083e91906119e4565b610c6a565b6001905092915050565b6000609760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61089e610c62565b73ffffffffffffffffffffffffffffffffffffffff166108bc61091e565b73ffffffffffffffffffffffffffffffffffffffff1614610912576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090990611912565b60405180910390fd5b61091c60006111fb565b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606069805461095790611ac2565b80601f016020809104026020016040519081016040528092919081815260200182805461098390611ac2565b80156109d05780601f106109a5576101008083540402835291602001916109d0565b820191906000526020600020905b8154815290600101906020018083116109b357829003601f168201915b5050505050905090565b600080606660006109e9610c62565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610aa6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9d90611972565b60405180910390fd5b610aba610ab1610c62565b85858403610c6a565b600191505092915050565b6000610ad9610ad2610c62565b8484610f22565b6001905092915050565b6000609860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610b72610c62565b73ffffffffffffffffffffffffffffffffffffffff16610b9061091e565b73ffffffffffffffffffffffffffffffffffffffff1614610be6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdd90611912565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4d90611892565b60405180910390fd5b610c5f816111fb565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610cda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd190611952565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d41906118b2565b60405180910390fd5b80606660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e289190611992565b60405180910390a3505050565b600060019054906101000a900460ff1680610e5b575060008054906101000a900460ff16155b610e9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e91906118f2565b60405180910390fd5b60008060019054906101000a900460ff161590508015610eea576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b610ef26112c1565b610efc838361139a565b8015610f1d5760008060016101000a81548160ff0219169083151502179055505b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8990611932565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611002576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff990611872565b60405180910390fd5b61100d8383836114a3565b6000606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611094576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108b906118d2565b60405180910390fd5b818103606560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461112991906119e4565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161118d9190611992565b60405180910390a36111a08484846114a8565b50505050565b60008383111582906111ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e59190611850565b60405180910390fd5b5082840390509392505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600060019054906101000a900460ff16806112e7575060008054906101000a900460ff16155b611326576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161131d906118f2565b60405180910390fd5b60008060019054906101000a900460ff161590508015611376576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156113975760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff16806113c0575060008054906101000a900460ff16155b6113ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113f6906118f2565b60405180910390fd5b60008060019054906101000a900460ff16159050801561144f576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b82606890805190602001906114659291906114ad565b50816069908051906020019061147c9291906114ad565b50801561149e5760008060016101000a81548160ff0219169083151502179055505b505050565b505050565b505050565b8280546114b990611ac2565b90600052602060002090601f0160209004810192826114db5760008555611522565b82601f106114f457805160ff1916838001178555611522565b82800160010185558215611522579182015b82811115611521578251825591602001919060010190611506565b5b50905061152f9190611533565b5090565b5b8082111561154c576000816000905550600101611534565b5090565b60008135905061155f81611e04565b92915050565b60008135905061157481611e1b565b92915050565b60006020828403121561158c57600080fd5b600061159a84828501611550565b91505092915050565b600080604083850312156115b657600080fd5b60006115c485828601611550565b92505060206115d585828601611550565b9150509250929050565b6000806000606084860312156115f457600080fd5b600061160286828701611550565b935050602061161386828701611550565b925050604061162486828701611565565b9150509250925092565b6000806040838503121561164157600080fd5b600061164f85828601611550565b925050602061166085828601611565565b9150509250929050565b61167381611a3a565b82525050565b61168281611a4c565b82525050565b6000611693826119c8565b61169d81856119d3565b93506116ad818560208601611a8f565b6116b681611b52565b840191505092915050565b60006116ce6023836119d3565b91506116d982611b63565b604082019050919050565b60006116f16026836119d3565b91506116fc82611bb2565b604082019050919050565b60006117146022836119d3565b915061171f82611c01565b604082019050919050565b60006117376026836119d3565b915061174282611c50565b604082019050919050565b600061175a602e836119d3565b915061176582611c9f565b604082019050919050565b600061177d6020836119d3565b915061178882611cee565b602082019050919050565b60006117a06025836119d3565b91506117ab82611d17565b604082019050919050565b60006117c36024836119d3565b91506117ce82611d66565b604082019050919050565b60006117e66025836119d3565b91506117f182611db5565b604082019050919050565b61180581611a78565b82525050565b61181481611a82565b82525050565b600060208201905061182f600083018461166a565b92915050565b600060208201905061184a6000830184611679565b92915050565b6000602082019050818103600083015261186a8184611688565b905092915050565b6000602082019050818103600083015261188b816116c1565b9050919050565b600060208201905081810360008301526118ab816116e4565b9050919050565b600060208201905081810360008301526118cb81611707565b9050919050565b600060208201905081810360008301526118eb8161172a565b9050919050565b6000602082019050818103600083015261190b8161174d565b9050919050565b6000602082019050818103600083015261192b81611770565b9050919050565b6000602082019050818103600083015261194b81611793565b9050919050565b6000602082019050818103600083015261196b816117b6565b9050919050565b6000602082019050818103600083015261198b816117d9565b9050919050565b60006020820190506119a760008301846117fc565b92915050565b60006020820190506119c2600083018461180b565b92915050565b600081519050919050565b600082825260208201905092915050565b60006119ef82611a78565b91506119fa83611a78565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611a2f57611a2e611af4565b5b828201905092915050565b6000611a4582611a58565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611aad578082015181840152602081019050611a92565b83811115611abc576000848401525b50505050565b60006002820490506001821680611ada57607f821691505b60208210811415611aee57611aed611b23565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b611e0d81611a3a565b8114611e1857600080fd5b50565b611e2481611a78565b8114611e2f57600080fd5b5056fe45524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365a2646970667358221220d2a8099f67750f949180f36436adc1516ddceb77b4dd391930197c9d6f93c67a64736f6c63430008020033";

export class EnergyTokenUpgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EnergyTokenUpgradeable> {
    return super.deploy(overrides || {}) as Promise<EnergyTokenUpgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EnergyTokenUpgradeable {
    return super.attach(address) as EnergyTokenUpgradeable;
  }
  connect(signer: Signer): EnergyTokenUpgradeable__factory {
    return super.connect(signer) as EnergyTokenUpgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EnergyTokenUpgradeableInterface {
    return new utils.Interface(_abi) as EnergyTokenUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EnergyTokenUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EnergyTokenUpgradeable;
  }
}
