import { RestAction } from '../rest/definitions/RestAction';
import { Tracking } from '../Tracking';
import { UranusCore } from './Uranus';

export enum Compress {
  NONE = 'NONE',
  ZLIB = 'ZLIB'
}

export interface ConfigurationShardingOptions {
  getGateway: boolean;
  identifyFlags: boolean;
  shardStart: number;
  shardUntil: number;
  client?: UranusCore;
  analyzePayload: boolean;
  try: number;
  timeout: number;
  intent: number;
  restAction: RestAction;
  tracking: Tracking;
  compress: Compress
  decode: Compress;
  encode: Compress;
}


export interface CacheOptions {
  addItems: boolean;
  setLimitCache: boolean;
  limit: {
    guilds?: number;
    members?: number;
    messageOnChannel?: number
    roles?: number;
    stageInstances?: number;
    stickers?: number;
    voiceStates?: number;
    channels?: number;
    threads?: number;
    presences?: number;
  } | any
}

export interface ConfigurationOptions {
  token: string;
  timeout_request?: number;
  shards: ConfigurationShardingOptions;
  cacheManager: CacheOptions;
}