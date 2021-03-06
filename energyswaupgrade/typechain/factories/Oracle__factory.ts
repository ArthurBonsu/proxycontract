/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Oracle, OracleInterface } from "../Oracle";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rand",
        type: "uint256",
      },
    ],
    name: "feedRandomness",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rand",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061019c806100606000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633b3dca761461003b578063729b880314610059575b600080fd5b610043610075565b604051610050919061012a565b60405180910390f35b610073600480360381019061006e91906100f2565b61007b565b005b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146100d357600080fd5b8060018190555050565b6000813590506100ec8161014f565b92915050565b60006020828403121561010457600080fd5b6000610112848285016100dd565b91505092915050565b61012481610145565b82525050565b600060208201905061013f600083018461011b565b92915050565b6000819050919050565b61015881610145565b811461016357600080fd5b5056fea26469706673582212204cf176881f1a8fb7986721c6322e82ef306a8faa386791609236f1a4fabc556964736f6c63430008020033";

export class Oracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Oracle> {
    return super.deploy(overrides || {}) as Promise<Oracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Oracle {
    return super.attach(address) as Oracle;
  }
  connect(signer: Signer): Oracle__factory {
    return super.connect(signer) as Oracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleInterface {
    return new utils.Interface(_abi) as OracleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Oracle {
    return new Contract(address, _abi, signerOrProvider) as Oracle;
  }
}
