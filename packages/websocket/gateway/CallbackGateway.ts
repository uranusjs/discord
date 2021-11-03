import { WebsocketNetwork } from '../Websocket';





export function callback_connect(ws: WebsocketNetwork) {
  ws.status = 'CALLBACK_CONNECT'
  ws.ws = null;
  ws.connected = false;
  setTimeout(() => ws.emit('set-connection-websocket', true), 5 * 1000)
}