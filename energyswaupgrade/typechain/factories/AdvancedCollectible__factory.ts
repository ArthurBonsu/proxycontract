/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AdvancedCollectible,
  AdvancedCollectibleInterface,
} from "../AdvancedCollectible";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_VRFCoordinator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_LinkToken",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_keyhash",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
    ],
    name: "requestedCollectible",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    inputs: [
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "createCollectible",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "randomness",
        type: "uint256",
      },
    ],
    name: "rawFulfillRandomness",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "requestIdToSender",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "requestIdToTokenId",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "requestIdToTokenURI",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "setTokenURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    name: "tokenCounter",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenIdToBreed",
    outputs: [
      {
        internalType: "enum AdvancedCollectible.Breed",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200377a3803806200377a83398181016040528101906200003791906200024e565b82826040518060400160405280600581526020017f446f6769650000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f444f4700000000000000000000000000000000000000000000000000000000008152508160009080519060200190620000bd92919062000170565b508060019080519060200190620000d692919062000170565b5050508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250505050600060078190555080600c8190555067016345785d8a0000600d819055505050506200037b565b8280546200017e90620002e2565b90600052602060002090601f016020900481019282620001a25760008555620001ee565b82601f10620001bd57805160ff1916838001178555620001ee565b82800160010185558215620001ee579182015b82811115620001ed578251825591602001919060010190620001d0565b5b509050620001fd919062000201565b5090565b5b808211156200021c57600081600090555060010162000202565b5090565b600081519050620002318162000347565b92915050565b600081519050620002488162000361565b92915050565b6000806000606084860312156200026457600080fd5b6000620002748682870162000220565b9350506020620002878682870162000220565b92505060406200029a8682870162000237565b9150509250925092565b6000620002b182620002c2565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006002820490506001821680620002fb57607f821691505b6020821081141562000312576200031162000318565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6200035281620002a4565b81146200035e57600080fd5b50565b6200036c81620002b8565b81146200037857600080fd5b50565b60805160601c60a05160601c6133cc620003ae60003960008181610b7001526114f1015260006114b501526133cc6000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80634372441a116100b8578063a22cb4651161007c578063a22cb46514610384578063b88d4fde146103a0578063c87b56dd146103bc578063cbbc3c28146103ec578063d082e3811461041c578063e985e9c51461043a57610137565b80634372441a146102ba5780636352211e146102ea57806370a082311461031a57806394985ddd1461034a57806395d89b411461036657610137565b8063219c0eee116100ff578063219c0eee146101f257806322881f881461022257806323b872dd1461025257806331f1f3c31461026e57806342842e0e1461029e57610137565b806301ffc9a71461013c57806306fdde031461016c578063081812fc1461018a578063095ea7b3146101ba578063162094c4146101d6575b600080fd5b610156600480360381019061015191906122a5565b61046a565b60405161016391906127d3565b60405180910390f35b61017461054c565b6040516101819190612892565b60405180910390f35b6101a4600480360381019061019f9190612338565b6105de565b6040516101b1919061272e565b60405180910390f35b6101d460048036038101906101cf91906121db565b610663565b005b6101f060048036038101906101eb9190612361565b61077b565b005b61020c60048036038101906102079190612240565b6107d9565b604051610219919061272e565b60405180910390f35b61023c60048036038101906102379190612240565b61080c565b6040516102499190612a94565b60405180910390f35b61026c600480360381019061026791906120d5565b610824565b005b610288600480360381019061028391906122f7565b610884565b60405161029591906127ee565b60405180910390f35b6102b860048036038101906102b391906120d5565b610944565b005b6102d460048036038101906102cf9190612240565b610964565b6040516102e19190612892565b60405180910390f35b61030460048036038101906102ff9190612338565b610a04565b604051610311919061272e565b60405180910390f35b610334600480360381019061032f9190612070565b610ab6565b6040516103419190612a94565b60405180910390f35b610364600480360381019061035f9190612269565b610b6e565b005b61036e610c0a565b60405161037b9190612892565b60405180910390f35b61039e6004803603810190610399919061219f565b610c9c565b005b6103ba60048036038101906103b59190612124565b610e1d565b005b6103d660048036038101906103d19190612338565b610e7f565b6040516103e39190612892565b60405180910390f35b61040660048036038101906104019190612338565b610f26565b6040516104139190612877565b60405180910390f35b610424610f46565b6040516104319190612a94565b60405180910390f35b610454600480360381019061044f9190612099565b610f4c565b60405161046191906127d3565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061053557507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610545575061054482610fe0565b5b9050919050565b60606000805461055b90612d19565b80601f016020809104026020016040519081016040528092919081815260200182805461058790612d19565b80156105d45780601f106105a9576101008083540402835291602001916105d4565b820191906000526020600020905b8154815290600101906020018083116105b757829003601f168201915b5050505050905090565b60006105e98261104a565b610628576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061f906129d4565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061066e82610a04565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d690612a54565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106fe6110b6565b73ffffffffffffffffffffffffffffffffffffffff16148061072d575061072c816107276110b6565b610f4c565b5b61076c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076390612954565b60405180910390fd5b61077683836110be565b505050565b61078c6107866110b6565b83611177565b6107cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c290612a74565b60405180910390fd5b6107d482610e7f565b505050565b60086020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b6020528060005260406000206000915090505481565b61083561082f6110b6565b82611177565b610874576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086b90612a74565b60405180910390fd5b61087f838383611255565b505050565b600080610895600c54600d546114b1565b9050336008600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600960008381526020019081526020016000209080519060200190610910929190611e6a565b50807f1407d655ff3c024a96c54a8c62eb99076b252e94f2e0cdc30bcf86248a5f1b0360405160405180910390a250919050565b61095f83838360405180602001604052806000815250610e1d565b505050565b6009602052806000526040600020600091509050805461098390612d19565b80601f01602080910402602001604051908101604052809291908181526020018280546109af90612d19565b80156109fc5780601f106109d1576101008083540402835291602001916109fc565b820191906000526020600020905b8154815290600101906020018083116109df57829003601f168201915b505050505081565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610aad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa490612994565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1e90612974565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bfc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf390612a34565b60405180910390fd5b610c068282611613565b5050565b606060018054610c1990612d19565b80601f0160208091040260200160405190810160405280929190818152602001828054610c4590612d19565b8015610c925780601f10610c6757610100808354040283529160200191610c92565b820191906000526020600020905b815481529060010190602001808311610c7557829003601f168201915b5050505050905090565b610ca46110b6565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0990612914565b60405180910390fd5b8060056000610d1f6110b6565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610dcc6110b6565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610e1191906127d3565b60405180910390a35050565b610e2e610e286110b6565b83611177565b610e6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6490612a74565b60405180910390fd5b610e79848484846117e5565b50505050565b6060610e8a8261104a565b610ec9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec090612a14565b60405180910390fd5b6000610ed3611841565b90506000815111610ef35760405180602001604052806000815250610f1e565b80610efd84611858565b604051602001610f0e92919061270a565b6040516020818303038152906040525b915050919050565b600a6020528060005260406000206000915054906101000a900460ff1681565b60075481565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661113183610a04565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006111828261104a565b6111c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b890612934565b60405180910390fd5b60006111cc83610a04565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061123b57508373ffffffffffffffffffffffffffffffffffffffff16611223846105de565b73ffffffffffffffffffffffffffffffffffffffff16145b8061124c575061124b8185610f4c565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661127582610a04565b73ffffffffffffffffffffffffffffffffffffffff16146112cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112c2906129f4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561133b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611332906128f4565b60405180910390fd5b611346838383611a05565b6113516000826110be565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113a19190612c00565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113f89190612b79565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634000aea07f000000000000000000000000000000000000000000000000000000000000000084866000604051602001611525929190612809565b6040516020818303038152906040526040518463ffffffff1660e01b815260040161155293929190612795565b602060405180830381600087803b15801561156c57600080fd5b505af1158015611580573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a49190612217565b5060006115c7846000306006600089815260200190815260200160002054611a0a565b9050600160066000868152602001908152602001600020546115e99190612b79565b600660008681526020019081526020016000208190555061160a8482611a46565b91505092915050565b60006008600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600060096000858152602001908152602001600020805461166b90612d19565b80601f016020809104026020016040519081016040528092919081815260200182805461169790612d19565b80156116e45780601f106116b9576101008083540402835291602001916116e4565b820191906000526020600020905b8154815290600101906020018083116116c757829003601f168201915b50505050509050600060075490506116fc8382611a79565b611706818361077b565b60006003856117159190612dd9565b600281111561174d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b905080600a600084815260200190815260200160002060006101000a81548160ff021916908360028111156117ab577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555081600b60008881526020019081526020016000208190555060016007546117d79190612b79565b600781905550505050505050565b6117f0848484611255565b6117fc84848484611a97565b61183b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611832906128b4565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156118a0576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611a00565b600082905060005b600082146118d25780806118bb90612d7c565b915050600a826118cb9190612bcf565b91506118a8565b60008167ffffffffffffffff811115611914577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156119465781602001600182028036833780820191505090505b5090505b600085146119f95760018261195f9190612c00565b9150600a8561196e9190612dd9565b603061197a9190612b79565b60f81b8183815181106119b6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856119f29190612bcf565b945061194a565b8093505050505b919050565b505050565b600084848484604051602001611a239493929190612832565b6040516020818303038152906040528051906020012060001c9050949350505050565b60008282604051602001611a5b9291906126de565b60405160208183030381529060405280519060200120905092915050565b611a93828260405180602001604052806000815250611c2e565b5050565b6000611ab88473ffffffffffffffffffffffffffffffffffffffff16611c89565b15611c21578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611ae16110b6565b8786866040518563ffffffff1660e01b8152600401611b039493929190612749565b602060405180830381600087803b158015611b1d57600080fd5b505af1925050508015611b4e57506040513d601f19601f82011682018060405250810190611b4b91906122ce565b60015b611bd1573d8060008114611b7e576040519150601f19603f3d011682016040523d82523d6000602084013e611b83565b606091505b50600081511415611bc9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bc0906128b4565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611c26565b600190505b949350505050565b611c388383611c9c565b611c456000848484611a97565b611c84576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c7b906128b4565b60405180910390fd5b505050565b600080823b905060008111915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d03906129b4565b60405180910390fd5b611d158161104a565b15611d55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d4c906128d4565b60405180910390fd5b611d6160008383611a05565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611db19190612b79565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b828054611e7690612d19565b90600052602060002090601f016020900481019282611e985760008555611edf565b82601f10611eb157805160ff1916838001178555611edf565b82800160010185558215611edf579182015b82811115611ede578251825591602001919060010190611ec3565b5b509050611eec9190611ef0565b5090565b5b80821115611f09576000816000905550600101611ef1565b5090565b6000611f20611f1b84612ad4565b612aaf565b905082815260208101848484011115611f3857600080fd5b611f43848285612cd7565b509392505050565b6000611f5e611f5984612b05565b612aaf565b905082815260208101848484011115611f7657600080fd5b611f81848285612cd7565b509392505050565b600081359050611f9881613323565b92915050565b600081359050611fad8161333a565b92915050565b600081519050611fc28161333a565b92915050565b600081359050611fd781613351565b92915050565b600081359050611fec81613368565b92915050565b60008151905061200181613368565b92915050565b600082601f83011261201857600080fd5b8135612028848260208601611f0d565b91505092915050565b600082601f83011261204257600080fd5b8135612052848260208601611f4b565b91505092915050565b60008135905061206a8161337f565b92915050565b60006020828403121561208257600080fd5b600061209084828501611f89565b91505092915050565b600080604083850312156120ac57600080fd5b60006120ba85828601611f89565b92505060206120cb85828601611f89565b9150509250929050565b6000806000606084860312156120ea57600080fd5b60006120f886828701611f89565b935050602061210986828701611f89565b925050604061211a8682870161205b565b9150509250925092565b6000806000806080858703121561213a57600080fd5b600061214887828801611f89565b945050602061215987828801611f89565b935050604061216a8782880161205b565b925050606085013567ffffffffffffffff81111561218757600080fd5b61219387828801612007565b91505092959194509250565b600080604083850312156121b257600080fd5b60006121c085828601611f89565b92505060206121d185828601611f9e565b9150509250929050565b600080604083850312156121ee57600080fd5b60006121fc85828601611f89565b925050602061220d8582860161205b565b9150509250929050565b60006020828403121561222957600080fd5b600061223784828501611fb3565b91505092915050565b60006020828403121561225257600080fd5b600061226084828501611fc8565b91505092915050565b6000806040838503121561227c57600080fd5b600061228a85828601611fc8565b925050602061229b8582860161205b565b9150509250929050565b6000602082840312156122b757600080fd5b60006122c584828501611fdd565b91505092915050565b6000602082840312156122e057600080fd5b60006122ee84828501611ff2565b91505092915050565b60006020828403121561230957600080fd5b600082013567ffffffffffffffff81111561232357600080fd5b61232f84828501612031565b91505092915050565b60006020828403121561234a57600080fd5b60006123588482850161205b565b91505092915050565b6000806040838503121561237457600080fd5b60006123828582860161205b565b925050602083013567ffffffffffffffff81111561239f57600080fd5b6123ab85828601612031565b9150509250929050565b6123be81612c34565b82525050565b6123cd81612c46565b82525050565b6123dc81612c52565b82525050565b6123f36123ee82612c52565b612dc5565b82525050565b600061240482612b36565b61240e8185612b4c565b935061241e818560208601612ce6565b61242781612ef5565b840191505092915050565b61243b81612cc5565b82525050565b600061244c82612b41565b6124568185612b5d565b9350612466818560208601612ce6565b61246f81612ef5565b840191505092915050565b600061248582612b41565b61248f8185612b6e565b935061249f818560208601612ce6565b80840191505092915050565b60006124b8603283612b5d565b91506124c382612f06565b604082019050919050565b60006124db601c83612b5d565b91506124e682612f55565b602082019050919050565b60006124fe602483612b5d565b915061250982612f7e565b604082019050919050565b6000612521601983612b5d565b915061252c82612fcd565b602082019050919050565b6000612544602c83612b5d565b915061254f82612ff6565b604082019050919050565b6000612567603883612b5d565b915061257282613045565b604082019050919050565b600061258a602a83612b5d565b915061259582613094565b604082019050919050565b60006125ad602983612b5d565b91506125b8826130e3565b604082019050919050565b60006125d0602083612b5d565b91506125db82613132565b602082019050919050565b60006125f3602c83612b5d565b91506125fe8261315b565b604082019050919050565b6000612616602983612b5d565b9150612621826131aa565b604082019050919050565b6000612639602f83612b5d565b9150612644826131f9565b604082019050919050565b600061265c601f83612b5d565b915061266782613248565b602082019050919050565b600061267f602183612b5d565b915061268a82613271565b604082019050919050565b60006126a2603183612b5d565b91506126ad826132c0565b604082019050919050565b6126c181612cbb565b82525050565b6126d86126d382612cbb565b612dcf565b82525050565b60006126ea82856123e2565b6020820191506126fa82846126c7565b6020820191508190509392505050565b6000612716828561247a565b9150612722828461247a565b91508190509392505050565b600060208201905061274360008301846123b5565b92915050565b600060808201905061275e60008301876123b5565b61276b60208301866123b5565b61277860408301856126b8565b818103606083015261278a81846123f9565b905095945050505050565b60006060820190506127aa60008301866123b5565b6127b760208301856126b8565b81810360408301526127c981846123f9565b9050949350505050565b60006020820190506127e860008301846123c4565b92915050565b600060208201905061280360008301846123d3565b92915050565b600060408201905061281e60008301856123d3565b61282b60208301846126b8565b9392505050565b600060808201905061284760008301876123d3565b61285460208301866126b8565b61286160408301856123b5565b61286e60608301846126b8565b95945050505050565b600060208201905061288c6000830184612432565b92915050565b600060208201905081810360008301526128ac8184612441565b905092915050565b600060208201905081810360008301526128cd816124ab565b9050919050565b600060208201905081810360008301526128ed816124ce565b9050919050565b6000602082019050818103600083015261290d816124f1565b9050919050565b6000602082019050818103600083015261292d81612514565b9050919050565b6000602082019050818103600083015261294d81612537565b9050919050565b6000602082019050818103600083015261296d8161255a565b9050919050565b6000602082019050818103600083015261298d8161257d565b9050919050565b600060208201905081810360008301526129ad816125a0565b9050919050565b600060208201905081810360008301526129cd816125c3565b9050919050565b600060208201905081810360008301526129ed816125e6565b9050919050565b60006020820190508181036000830152612a0d81612609565b9050919050565b60006020820190508181036000830152612a2d8161262c565b9050919050565b60006020820190508181036000830152612a4d8161264f565b9050919050565b60006020820190508181036000830152612a6d81612672565b9050919050565b60006020820190508181036000830152612a8d81612695565b9050919050565b6000602082019050612aa960008301846126b8565b92915050565b6000612ab9612aca565b9050612ac58282612d4b565b919050565b6000604051905090565b600067ffffffffffffffff821115612aef57612aee612ec6565b5b612af882612ef5565b9050602081019050919050565b600067ffffffffffffffff821115612b2057612b1f612ec6565b5b612b2982612ef5565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612b8482612cbb565b9150612b8f83612cbb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612bc457612bc3612e0a565b5b828201905092915050565b6000612bda82612cbb565b9150612be583612cbb565b925082612bf557612bf4612e39565b5b828204905092915050565b6000612c0b82612cbb565b9150612c1683612cbb565b925082821015612c2957612c28612e0a565b5b828203905092915050565b6000612c3f82612c9b565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6000819050612c968261330f565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000612cd082612c88565b9050919050565b82818337600083830152505050565b60005b83811015612d04578082015181840152602081019050612ce9565b83811115612d13576000848401525b50505050565b60006002820490506001821680612d3157607f821691505b60208210811415612d4557612d44612e97565b5b50919050565b612d5482612ef5565b810181811067ffffffffffffffff82111715612d7357612d72612ec6565b5b80604052505050565b6000612d8782612cbb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612dba57612db9612e0a565b5b600182019050919050565b6000819050919050565b6000819050919050565b6000612de482612cbb565b9150612def83612cbb565b925082612dff57612dfe612e39565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4f6e6c7920565246436f6f7264696e61746f722063616e2066756c66696c6c00600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b600381106133205761331f612e68565b5b50565b61332c81612c34565b811461333757600080fd5b50565b61334381612c46565b811461334e57600080fd5b50565b61335a81612c52565b811461336557600080fd5b50565b61337181612c5c565b811461337c57600080fd5b50565b61338881612cbb565b811461339357600080fd5b5056fea26469706673582212201e0ace1cbb8dc7a7b566348a8c4bd1ccf8d5cca7dd7c27ab3448b4f27bce1ee964736f6c63430008020033";

export class AdvancedCollectible__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _VRFCoordinator: string,
    _LinkToken: string,
    _keyhash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AdvancedCollectible> {
    return super.deploy(
      _VRFCoordinator,
      _LinkToken,
      _keyhash,
      overrides || {}
    ) as Promise<AdvancedCollectible>;
  }
  getDeployTransaction(
    _VRFCoordinator: string,
    _LinkToken: string,
    _keyhash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _VRFCoordinator,
      _LinkToken,
      _keyhash,
      overrides || {}
    );
  }
  attach(address: string): AdvancedCollectible {
    return super.attach(address) as AdvancedCollectible;
  }
  connect(signer: Signer): AdvancedCollectible__factory {
    return super.connect(signer) as AdvancedCollectible__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdvancedCollectibleInterface {
    return new utils.Interface(_abi) as AdvancedCollectibleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdvancedCollectible {
    return new Contract(address, _abi, signerOrProvider) as AdvancedCollectible;
  }
}