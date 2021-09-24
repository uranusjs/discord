const DefaultClient = require('./DefaultClient')


class DefaultClientBuilder extends DefaultClient {
  static new = (options) => {
    return new DefaultClient(options)
  }
}


module.exports = DefaultClientBuilder;