import { Guild } from '../../resources/Guild';
import { User } from '../../resources/User';
import { IdentifyFlagApplication } from '../gateway/GatewayApplicationIdentify';
import { emit_event } from '../gateway/GatewayEngine';
import { WebsocketNetwork } from '../Websocket';


export interface ReadyInterface {
  user?: User | any;
  session_id?: string | any;
  relationships?: Array<any> | any;
  private_channels?: Array<any> | any;
  presences?: Array<any> | any;
  guilds?: Array<Guild> | any;
  guilds_join_requests?: Array<Guild> | any;
  geo_ordered_rtc_regions?: Array<string> | any;
  application?: any;
}


export class ReadyEvent implements ReadyInterface {
  user?: any;
  session_id?: string | any;
  relationships?: any[] | any;
  private_channels?: any[] | any;
  presences?: any[] | any;
  guilds?: Guild[] | any;
  guilds_join_requests?: Guild[] | any;
  geo_ordered_rtc_regions?: string[] | any;
  application?: any;


  constructor(ws: WebsocketNetwork, data: any) {

    if (data.user !== undefined) {
      this.user = data.user
    }
    if (data.session_id !== undefined) {
      this.session_id = data.session_id
    }
    if (data.relationships !== undefined) {
      this.relationships = data.relationships
    }
    if (data.private_channels !== undefined) {
      this.private_channels = data.private_channels
    }
    if (data.presences !== undefined) {
      this.presences = data.presences
    }
    if (data.guilds !== undefined) {
      this.guilds = data.guilds
    }
    if (data.guilds_join_requests !== undefined) {
      this.guilds_join_requests = data.guilds_join_requests
    }
    if (data.geo_ordered_rtc_regions !== undefined) {
      this.geo_ordered_rtc_regions = data.geo_ordered_rtc_regions
    }
    if (data.application !== undefined) {
      this.application = data.application
      if (data.application.flags !== undefined) {
        new IdentifyFlagApplication(ws, data.application.flags)
      }
    }
    emit_event(ws, {
      tag_log: ['DEBUG', `Ready`],
      event: 'debug',
      took: 0,
      data: {
        ws: ws,
        data: this
      }
    });
    emit_event(ws, {
      tag_log: [`Ready`],
      event: 'ready',
      took: 0,
      data: {
        ws: ws,
        data: this
      }
    });
  }

}