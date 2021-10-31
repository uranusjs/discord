import { GatewayRest, payload_json, RestAction, Tracking } from '..';
import { Opcodes, Utils } from './gateway/GatewayDefinitions';
import { emit_event } from './gateway/GatewayEngine';
import WebSocket = require('ws');

export interface PayloadMessage {
  op: number,
  d: any,
  s: number,
  t: string,
}

export interface NetworkOptions {
  token?: string;
  try: number;
  timeout: number;
  intent: number;
  getGateway: boolean;
  shardStart: number;
  shardUntil: number;
  debug: boolean;
  analyze_payload: boolean;
  restAction: RestAction;
  tracking: Tracking;
}


export interface DebugInfo {
  tag_log: Array<string>,
  event: string,
  took: number,
  data: any,
}


export interface GatewayResponse {
  url: string;
}

export class WebsocketRestOptions extends GatewayRest {
  constructor(restAction: RestAction) {
    super(restAction);
  }
}


export class WebsocketNetwork extends WebsocketRestOptions {
  options: NetworkOptions;
  token: string;
  ws: WebSocket | null;
  uptime: number;
  heartbeat_interval: number;
  heartbeat_send: number;
  heartbeat_received: number;
  heartbeat_api: number;
  interval?: NodeJS.Timer | null;
  seq: number;
  session_id: string | null;


  constructor(options: NetworkOptions) {
    super(options.restAction);
    if (options.restAction == undefined) {
      throw Error('RestAction is required to activate this class.')
    }
    if (options.tracking == undefined) {
      throw Error('Tracking is required to activate this class.')
    }
    this.options = options;
    this.token = options.token!!;
    this.ws = null;
    this.uptime = Date.now();
    this.#connect();
    this.heartbeat_send = 0;
    this.heartbeat_received = 0;
    this.heartbeat_interval = 0;
    this.heartbeat_api = 0;
    this.session_id = null;
    this.seq = 0;
    this.interval = null;

    options.tracking.on('set-connection-websocket', () => this.#connect());
  }



  identify() {
    this.sendPayload(Opcodes.Identify, {
      token: this.token,
      intents: 513,
      properties: {
        $browser: '',
        $device: ''
      }
    })
    emit_event(this, {
      tag_log: ['DEBUG', 'IDENTIFY'],
      event: 'debug',
      took: 0,
      data: {
        ws: this,
        data: {},
      }
    });
  }

  clearInterval() {
    if (!(this.interval == null)) {
      clearInterval(this.interval);
      this.heartbeat_interval = 0;
    }
  }

  close(_code: number, _reason: string) {
    emit_event(this, {
      tag_log: ['DEBUG', `NETWORK_CLOSED=${_code}`],
      event: 'debug',
      took: 0,
      data: {
        ws: this,
        reason: _reason
      }
    });
  }
  set_heartbeat() {
    this.interval = setInterval(() => {
      
      emit_event(this, {
        tag_log: ['DEBUG', `Heartbeat-Send`],
        event: 'debug',
        took: 0,
        data: {
          ws: this,
          data: {}
        }
      });
      this.heartbeat_send = Date.now();
      this.sendPayload(Opcodes.Heartbeat, {})
    }, this.heartbeat_interval);
  }
  error(err: Error | string | any) {
    emit_event(this, {
      tag_log: ['DEBUG', `ERROR`],
      event: 'debug',
      took: 0,
      data: {
        ws: this,
        err: err
      }
    });
    emit_event(this, {
      tag_log: [`ERROR`],
      event: 'error',
      took: 0,
      data: {
        ws: this,
        err: err
      }
    });
  }

  sendPayload(_op: Opcodes, data: any) {
    if (!(this.ws == null)) {
      this.ws.send(JSON.stringify({ op: _op, s: this.seq, d: data }));
    }
  }

  #connect() {
    this.ws = new WebSocket(`wss://gateway.discord.gg/?v=${Utils.Version}&encoding=json`);
    this.ws.on('close', (code, reason) => this.close(code, reason))
    this.ws.on('error', (err) => this.error(err))
    this.ws.on('message', (data) => payload_json(this, data))
    this.ws.on('ping', (data) => console.log(data))
  }
}