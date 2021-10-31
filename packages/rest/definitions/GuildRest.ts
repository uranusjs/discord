import { Guild, GuildData, GuildPreviewStructure, GuildStructure } from '../../resources/Guild';
import { ENDPOINT_GUILD, ENDPOINT_GUILD_PREVIEW } from '../endpoints/Guild';
import { RestManager } from '../Rest';




export class GuildRest extends GuildData {
  #rest: RestManager;
  constructor(rest: RestManager, structure: GuildStructure) {
    super(structure)
    this.#rest = rest;
  }

  getGuildRest() {
    const endpoint = ENDPOINT_GUILD(this.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint,
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data as unknown as Guild
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

  modifyGuild() {
    const endpoint = ENDPOINT_GUILD_PREVIEW(this.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint,
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data as unknown as GuildPreviewStructure
    })
  }

}