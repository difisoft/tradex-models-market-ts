/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * tradingViewHistoryResponse schema
 */
export interface TradingViewHistoryResponse {
  /**
   * time
   */
  t?: number[];
  /**
   * open
   */
  o?: number[];
  /**
   * high
   */
  h?: number[];
  /**
   * low
   */
  l?: number[];
  /**
   * last
   */
  c?: number[];
  /**
   * value
   */
  v?: number[];
  /**
   * status
   */
  s?: string;
  /**
   * nextTime
   */
  nextTime?: number;
  [k: string]: any;
}
