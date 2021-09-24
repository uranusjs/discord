

class DefaultClient {
  constructor(options) {
    this.#token = null;
    this.gateway = null;
    this.options = options;
  }

  login(token) {
    this.#token = token;
  }
}

module.exports = DefaultClient;