import { Tracking } from '../../Tracking';
import { RestManager } from '../Rest';
import { requests_global } from '../RestGlobal';


export const APIDiscord = {
  VERSION: 9,
  DOMAIN: 'https://discord.com/api/'
}


export class RestAction {
  tracking: Tracking;
  restManager: RestManager;
  global_request: typeof requests_global;

  constructor(tracking: Tracking, restManager: RestManager, global: typeof requests_global) {
    this.tracking = tracking;
    this.restManager = restManager;
    this.global_request = global;
  }

}