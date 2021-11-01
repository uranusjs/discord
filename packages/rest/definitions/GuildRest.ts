import { ChannelStructure } from '../../resources/Channel';
import {  GuildData, GuildPreviewStructure, GuildStructure } from '../../resources/Guild';
import { ENDPOINT_GUILD, ENDPOINT_GUILD_GET_CHANNELS, ENDPOINT_GUILD_PREVIEW } from '../endpoints/Guild';
import { RestManager } from '../Rest';
import { CreateGuildChannel } from './params/GuildParams';




export class GuildRest extends GuildData {
  #rest: RestManager
  constructor(rest: RestManager, structure: GuildStructure) {
    super(structure);
    this.#rest = rest;
  }

  getGuildRest() {
    const endpoint = ENDPOINT_GUILD(this.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint,
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data as unknown as this
    })
  }

  getGuildPreviewRest() {
    const endpoint = ENDPOINT_GUILD_PREVIEW(this.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint,
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data as unknown as GuildPreviewStructure
    })
  }

  modifyGuildRest() {
    const endpoint = ENDPOINT_GUILD(this.id)
    return this.#rest.PATCH({
      endpoint: endpoint.details.endpoint,
    }, { is_require_token: true }).then((rest) => {
      const d = rest.options.data as unknown as GuildStructure
      this.update_state(d)
      return rest.options.data as unknown as GuildPreviewStructure
    })
  }


  createGuildChannelRest(params: CreateGuildChannel) {
    const endpoint = ENDPOINT_GUILD_GET_CHANNELS(this.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint,
      data: params
    }, { is_require_token: true, is_require_data: true }).then((rest) => {
      return rest.options.data as unknown as ChannelStructure
    })
  }


  getGuildChannelRest() {
    const endpoint = ENDPOINT_GUILD_GET_CHANNELS(this.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint,
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data as unknown as ChannelStructure
    })
  }

}