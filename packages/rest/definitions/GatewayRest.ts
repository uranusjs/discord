import { EventEmitter } from 'stream';
import { GatewayResponse } from '../..';
import { RestManager } from '../Rest';
import { RestAction } from './RestAction';

export class GatewayRest extends EventEmitter {
  restAction: RestAction;
  restManager: RestManager;
  constructor(restAction: RestAction) {
    super();
    this.restAction = restAction;
    this.restManager = restAction.restManager;
  }

  get_gateway() {
    return this.restManager.GET({
      endpoint: '/gateway',
    }) as unknown as GatewayResponse
  }

}