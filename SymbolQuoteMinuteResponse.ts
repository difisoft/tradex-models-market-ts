/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * symbolQuoteMinuteResponse schema
 */
export interface SymbolQuoteMinuteResponse {
  /**
   * time (yyyyMMddhhmmss)
   */
  t?: string;
  /**
   * open price
   */
  o?: number;
  /**
   * high price
   */
  h?: number;
  /**
   * low price
   */
  l?: number;
  /**
   * close price
   */
  c?: number;
  /**
   * period trading volume
   */
  pv?: number;
  [k: string]: any;
}
