const Utils = new (require('../../tools/Utils'))()


class EventUnknownGateway {

}

class EventGateway {
  constructor(data) {
  }

  #identifyClass(data) {

  }
}

module.exports = {
  EventGateway,
  EventUnknownGateway
}