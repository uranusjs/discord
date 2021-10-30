import { PayloadMessage, WebsocketNetwork } from '../Websocket';
import { Opcodes } from './GatewayDefinitions';
import { gateway_message } from './GatewayDispatch';
import { emit_event } from './GatewayEngine';



export function payload_json(ws: WebsocketNetwork, data: any) {
  const json = JSON.parse(data) as unknown as PayloadMessage;
  switch (json.op) {
    case Opcodes.Hello: {
      ws.heartbeat_interval = json.d.heartbeat_interval;
      ws.heartbeat();
      emit_event(ws, {
        tag_log: ['DEBUG', 'HELLO'],
        event: 'debug',
        took: 0,
        data: {
          ws: ws,
          data: json.d
        }
      });
      ws.identify()
      return
    };
    case Opcodes.Dispatch: {
      gateway_message(ws, json)
    }
      break;
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

}