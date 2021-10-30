
import { ApplicationFlagsArray } from '../../resources/Application';
import { WebsocketNetwork } from '../Websocket';
import { emit_event } from './GatewayEngine';


export interface IdentifyFlag {
  flags_list: Array<string>;
  flags: number;
};


export class IdentifyFlagApplication implements IdentifyFlag {
  flags_list: string[];
  flags: number;
  constructor(_ws: WebsocketNetwork, flags: number) {
    this.flags_list = [];
    this.flags = flags;
    for (const flag of ApplicationFlagsArray) {
      if ((flags & flag.bit) == flag.bit) {
        this.flags_list.push(flag.name);
        emit_event(_ws, {
          tag_log: ['DEBUG', 'APPLICATION_IDENTIFY', flag.name],
          event: 'debug',
          took: 0,
          data: {
            ws: this,
            reason: 'Profile identified in the application.'
          }
        });
      }
    }

    emit_event(_ws, {
      tag_log: ['DEBUG', 'APPLICATION_IDENTIFY_LIST'],
      event: 'debug',
      took: 0,
      data: {
        ws: this,
        flags_list: this.flags_list
      }
    });

  }
}