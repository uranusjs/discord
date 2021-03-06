import { DebugInfo, WebsocketNetwork } from '../Websocket';


export function emit_event(ws: WebsocketNetwork,event_data: DebugInfo) {
  ws.options.tracking.emit(event_data.event, { event_data });
}