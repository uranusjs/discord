import { EventEmitter } from 'events';
import { payload_json } from '..';
import { Opcodes, Utils } from './gateway/GatewayDefinitions';
import WebSocket = require('ws');
import { emit_event } from './gateway/GatewayEngine';

export interface PayloadMessage {
  op: number,
  d: any,
  s: number,
  t: string,
}

export interface NetworkOptions {
  token?: string,
  try: number,
  timeout: number,
  intent: number,
  getGateway: boolean,
  shardStart: number,
  shardUntil: number,
  debug: boolean,
  analyze_payload: boolean,
}


export interface DebugInfo {
  tag_log: Array<string>,
  event: string,
  took: number,
  data: any,
}


export class WebsocketNetwork extends EventEmitter {
  options: NetworkOptions;
  token: string;
  ws: WebSocket | null;
  uptime: number;
  heartbeat_interval: number;
  interval?: NodeJS.Timer | null;
  seq: number;


  constructor(options: NetworkOptions) {
    super();
    this.options = options;
    this.token = options.token!!;
    this.ws = null;
    this.uptime = Date.now();
    this.#connect();
    this.heartbeat_interval = 0;
    this.seq = 0;
    this.interval = null;
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
  heartbeat() {
    this.interval = setInterval(() => {
      this.sendPayload(Opcodes.HeartbeatAck, {})
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
    this.ws.on('close', this.close)
    this.ws.on('error', this.error)
    this.ws.on('message', (data) => payload_json(this, data))
    this.ws.on('ping', (data) => console.log(data))
  }
}