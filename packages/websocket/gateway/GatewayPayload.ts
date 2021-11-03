import { inflate } from 'zlib';
import { PayloadMessage, WebsocketNetwork } from '../Websocket';
import { Opcodes } from './GatewayDefinitions';
import { gateway_message } from './GatewayDispatch';
import { emit_event } from './GatewayEngine';

export function payload_json(ws: WebsocketNetwork, data: any | Buffer) {
  let json;
  inflate(data, (_err, buf) => {

    if (buf !== undefined) {
      json = JSON.parse(buf.toString('utf-8')) as unknown as PayloadMessage;
      console.log(json)
    } else {
      json = JSON.parse(data.toString('utf-8')) as unknown as PayloadMessage;

    }

    switch (json.op) {
      case Opcodes.Hello: {
        ws.status = 'HELLO'
        ws.heartbeat_interval = json.d.heartbeat_interval;
        if ((ws.interval == null)) {
          ws.heartbeat_send = Date.now()
          ws.set_heartbeat();
        }
        emit_event(ws, {
          tag_log: ['DEBUG', 'HELLO'],
          event: 'debug',
          took: 0,
          data: {
            ws: ws,
            data: json.d
          }
        });
        ws.status = 'IDENTIFYING'
        ws.identify()
        return
      };
      case Opcodes.Dispatch: {
        gateway_message(ws, json)
        return
      }
      case Opcodes.HeartbeatAck: {
        ws.heartbeat_received = Date.now()
        ws.heartbeat_api = ws.heartbeat_received - ws.heartbeat_send
        return
      };
      case Opcodes.Reconnect: {

      }
    }

    emit_event(ws, {
      tag_log: ['DEBUG'],
      event: 'debug',
      took: 0,
      data: {
        ws: ws,
        data: json
      }
    });
  })


}