/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * tradingViewListChartResponse schema
 */
export interface TradingViewListChartResponse {
  /**
   * status
   */
  status?: string;
  /**
   * data
   */
  data?: {
    /**
     * id
     */
    id?: string;
    /**
     * timestamp
     */
    timestamp?: number;
    /**
     * name
     */
    name?: string;
    /**
     * resolution
     */
    resolution?: string;
    /**
     * symbol
     */
    symbol?: string;
    [k: string]: any;
  }[];
  [k: string]: any;
}