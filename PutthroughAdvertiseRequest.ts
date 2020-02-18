/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "tradex-models-common";

/**
 * putthroughAdvertiseRequest schema
 */
export type PutthroughAdvertiseRequest = BaseRequest & {
  /**
   * market: ALL, HNX, HOSE, UPCOM
   */
  marketType: null | ("ALL" | "HNX" | "HOSE" | "UPCOM");
  /**
   * sell Buy Type
   */
  sellBuyType?: null | ("SELL" | "BUY");
  /**
   * offset
   */
  offset?: number | null;
  /**
   * The number of record that user want to see at each page
   */
  fetchCount?: number | null;
  [k: string]: any;
};
