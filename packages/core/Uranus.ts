import { DiscordGuild, WebsocketNetwork } from '..';
import { ManagerCache } from '../manager/ManagerCache';
import { ConfigurationOptions } from './Configuration';


export class UranusCore {
  guilds: ManagerCache<string, DiscordGuild>;
  gateway_states: Map<number, WebsocketNetwork>;
  options: ConfigurationOptions;
  constructor(options: ConfigurationOptions) {
    this.options = options;
    this.guilds = new ManagerCache('guilds', options.cacheManager);
    this.gateway_states = new Map();
    this.#resolve_options();
  }

  #resolve_options() {
    if (this.options.cacheManager.addItems == undefined) {
      this.options.cacheManager.addItems = false;
    }
    if (this.options.cacheManager.setLimitCache == undefined) {
      this.options.cacheManager.setLimitCache = false;
    }
  }


  connect() {

  }
}