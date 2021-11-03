import { WebsocketNetwork } from '../Websocket';





export function callback_connect(ws: WebsocketNetwork) {
  ws.status = 'CALLBACK_CONNECT'
  ws.emit('set-connection-websocket', true)
}