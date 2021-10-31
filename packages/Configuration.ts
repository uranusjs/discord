export interface ConfigurationShardingOptions {
  confirm_gateway: boolean;
  identify_flags: boolean;
  shardStart: number;
  shardEnd: number;
  client?: null;
}

export interface ConfigurationRestOptions {
  
}

export interface ConfigurationHttpInteractionOptions {

}

export interface ConfigurationOptions {
  token: string;
  timeout_request?: number;
  shards: ConfigurationShardingOptions;
  rest_options: ConfigurationRestOptions;
  http_interaction: ConfigurationHttpInteractionOptions;
}