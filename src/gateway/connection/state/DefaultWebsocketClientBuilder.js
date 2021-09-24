const EventEmitter = require("events");

class NativeWebsocket extends EventEmitter {
  constructor(url, options) {
    super();
    this.ws = new WebSocket(url, options)
    this.status = 'withoutStatus'
  }

  closeConnection(code, reason) {
    try {
      if (!(typeof code === 'number')) {
        throw Error('That doesn\'t look like a number!')
      }
      if (code !== undefined) {
        if (reason !== undefined) {
          this.#ws.close(code, reason)
          return true
        } else {
          this.#ws.close(code)
          return true
        }
      } else {
        Error('There is no code return!')
      }
      return false;
    } catch (error) {
      Error(error)
      return false;
    }
  }



  sendJSON(data) {
    return this.#ws.send(JSON.stringify(data))
  }

  destroyConnection() {
    try {
      this.#ws.close()
      return true;
    } catch (error) {
      Error(error)
      return false;
    }
  }

  static new = (url, options) => {
    return new (this)(url, options)
  }
}

class InterfaceConnection extends EventEmitter {
  constructor(ws, gateway) {
    super();
    
  }
}

class DefaultWebsocketClientBuilder {
  static openConnection = (url, options, gateway) => {
    const a = NativeWebsocket.new(url, options)
    const 

  }

  static closeConnection = (url, options, gateway, data) => {

  }

  static reestablishConnection = (url, options, gateway, tryAgain) => {

  }
}


module.exports = {
  
}