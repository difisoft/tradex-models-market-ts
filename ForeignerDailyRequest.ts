/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "tradex-models-common";

/**
 * foreignerDailyRequest schema
 */
export type ForeignerDailyRequest = BaseRequest & {
  /**
   * symbol code
   */
  symbol: string;
  /**
   * The number of record that user want to see at each page
   */
  fetchCount?: number | null;
  /**
   * base date foreigner next (yyyymmdd) && to query date < baseDate
   */
  baseDate?: string | null;
  [k: string]: any;
};
