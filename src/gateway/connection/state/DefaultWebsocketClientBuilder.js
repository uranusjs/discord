/* eslint-disable no-unused-vars */
const EventEmitter = require('events');
const WebSocket = require('ws');

class WebSocketClient extends EventEmitter {
  constructor(url, options) {
    super();
    this.ws = new WebSocket(url, options);
    this.ws.on('message', (message) => {
      this.emit('message', (message));
    });
    this.status = 'withoutStatus';
  }

  closeConnection(code, reason) {
    try {
      if (!(typeof code === 'number')) {
        throw Error('That doesn\'t look like a number!');
      }
      if (code !== undefined) {
        if (reason !== undefined) {
          this.ws.close(code, reason);
          return true;
        } else {
          this.ws.close(code);
          return true;
        }
      } else {
        Error('There is no code return!');
      }
      return false;
    } catch (error) {
      Error(error);
      return false;
    }
  }
  destroyConnection() {
    try {
      this.ws.close();
      return true;
    } catch (error) {
      Error(error);
      return false;
    }
  }
  heartbeart() {

  }






  static new(url, options) {
    return new (this)(url, options);
  }
  sendJSON(data) {
    return this.ws.send(JSON.stringify(data));
  }


  sendOP(op, data) {
    const a = {};

    a.op = op;
    a.d = data;

    return this.ws.send(JSON.stringify(data));
  }




}

class InterfaceConnection extends EventEmitter {
  constructor(ws, gateway) {
    super();

  }
}

class DefaultWebsocketClientBuilder {
  static closeConnection(url, options, gateway, data) {

  }
  static openConnection(url, options, gateway) {
    const a = WebSocketClient.new(url, options);


  }



  static reestablishConnection(url, options, gateway, tryAgain) {

  }
}


module.exports = {
  WebSocketClient, InterfaceConnection, DefaultWebsocketClientBuilder
};
