/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * foreignerSummaryResponse schema
 */
export interface ForeignerSummaryResponse {
  /**
   * stock code
   */
  s?: string;
  /**
   * market type (HOSE/HNX/UPCOM)
   */
  m?: string;
  /**
   * change
   */
  ch?: number;
  /**
   * rate
   */
  ra?: number;
  /**
   * Foreigner buy volume
   */
  bvo?: number;
  /**
   * Foreigner sell volume
   */
  svo?: number;
  /**
   * Foreigner net volume (ròng)
   */
  nvo?: number;
  /**
   * Foreigner buy value
   */
  bva?: number;
  /**
   * Foreigner sell value
   */
  sva?: number;
  /**
   * net value (ròng)
   */
  nva?: number;
  /**
   * ForeignerTotalRoom
   */
  tr?: number;
  /**
   * ForeignerCurrentRoom
   */
  cr?: number;
  /**
   * ForeignerBuyAbleRatio
   */
  br?: number;
  /**
   * ForeignerChangeVolume
   */
  cv?: number;
  /**
   * ForeignerHoldVolume
   */
  hv?: number;
  /**
   * ForeignerHoldRatio
   */
  hr?: number;
  [k: string]: any;
}
