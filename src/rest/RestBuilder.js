class FallbackRequest {
  async static newBuilderReceive(method, status, rateLimit, data, date = Date.now()) {

  }
  static newBuilderSend(method, status, data, date = Date.now()) {

  }
}

class RestControlBuilder {
  constructor(policyCache) {
    this.cache = [];
  }
}

class RestBuilder {
  /**
   * 
   * @param {*} url 
   * @param {*} options 
   * @returns RestBuilder
   */
  static new = (url, options) => {
    if (options.#token !== undefined) {
      throw Error('Token = This doesn\'t appear to be a token.')
    }
    return new (this)()
  }
}

module.exports = {
  RestBuilder,
  RestControlBuilder,
  FallbackRequest
}