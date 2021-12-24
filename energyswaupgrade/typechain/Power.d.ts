/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PowerInterface extends ethers.utils.Interface {
  functions: {
    "accurateWeights(uint256,uint256)": FunctionFragment;
    "balancedWeightsByStake(uint256,uint256,uint256,uint256,bool)": FunctionFragment;
    "initLambertArray()": FunctionFragment;
    "initMaxExpArray()": FunctionFragment;
    "normalizedWeights(uint256,uint256)": FunctionFragment;
    "power(uint256,uint256,uint32,uint32)": FunctionFragment;
    "safeFactors(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accurateWeights",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balancedWeightsByStake",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "initLambertArray",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initMaxExpArray",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "normalizedWeights",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "power",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeFactors",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "accurateWeights",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balancedWeightsByStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initLambertArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initMaxExpArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "normalizedWeights",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "power", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeFactors",
    data: BytesLike
  ): Result;

  events: {};
}

export class Power extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PowerInterface;

  functions: {
    accurateWeights(
      _a: BigNumberish,
      _b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, number]>;

    balancedWeightsByStake(
      _hi: BigNumberish,
      _lo: BigNumberish,
      _tq: BigNumberish,
      _rp: BigNumberish,
      _lowerStake: boolean,
      overrides?: CallOverrides
    ): Promise<[number, number]>;

    initLambertArray(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initMaxExpArray(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    normalizedWeights(
      _a: BigNumberish,
      _b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, number]>;

    power(
      _baseN: BigNumberish,
      _baseD: BigNumberish,
      _expN: BigNumberish,
      _expD: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, number]>;

    safeFactors(
      _a: BigNumberish,
      _b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  accurateWeights(
    _a: BigNumberish,
    _b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[number, number]>;

  balancedWeightsByStake(
    _hi: BigNumberish,
    _lo: BigNumberish,
    _tq: BigNumberish,
    _rp: BigNumberish,
    _lowerStake: boolean,
    overrides?: CallOverrides
  ): Promise<[number, number]>;

  initLambertArray(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initMaxExpArray(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  normalizedWeights(
    _a: BigNumberish,
    _b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[number, number]>;

  power(
    _baseN: BigNumberish,
    _baseD: BigNumberish,
    _expN: BigNumberish,
    _expD: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, number]>;

  safeFactors(
    _a: BigNumberish,
    _b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  callStatic: {
    accurateWeights(
      _a: BigNumberish,
      _b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, number]>;

    balancedWeightsByStake(
      _hi: BigNumberish,
      _lo: BigNumberish,
      _tq: BigNumberish,
      _rp: BigNumberish,
      _lowerStake: boolean,
      overrides?: CallOverrides
    ): Promise<[number, number]>;

    initLambertArray(overrides?: CallOverrides): Promise<void>;

    initMaxExpArray(overrides?: CallOverrides): Promise<void>;

    normalizedWeights(
      _a: BigNumberish,
      _b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, number]>;

    power(
      _baseN: BigNumberish,
      _baseD: BigNumberish,
      _expN: BigNumberish,
      _expD: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, number]>;

    safeFactors(
      _a: BigNumberish,
      _b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    accurateWeights(
      _a: BigNumberish,
      _b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balancedWeightsByStake(
      _hi: BigNumberish,
      _lo: BigNumberish,
      _tq: BigNumberish,
      _rp: BigNumberish,
      _lowerStake: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initLambertArray(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initMaxExpArray(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    normalizedWeights(
      _a: BigNumberish,
      _b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    power(
      _baseN: BigNumberish,
      _baseD: BigNumberish,
      _expN: BigNumberish,
      _expD: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    safeFactors(
      _a: BigNumberish,
      _b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accurateWeights(
      _a: BigNumberish,
      _b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balancedWeightsByStake(
      _hi: BigNumberish,
      _lo: BigNumberish,
      _tq: BigNumberish,
      _rp: BigNumberish,
      _lowerStake: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initLambertArray(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initMaxExpArray(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    normalizedWeights(
      _a: BigNumberish,
      _b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    power(
      _baseN: BigNumberish,
      _baseD: BigNumberish,
      _expN: BigNumberish,
      _expD: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    safeFactors(
      _a: BigNumberish,
      _b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}