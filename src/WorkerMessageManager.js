export class WorkerMessageManager {
  constructor ({onEnd = () => '', onWait = () => ''} = {}) {
    this._toSend = {}
    this._onEnd = onEnd
    this._onWait = onWait
  }

  send (message, cb) {
    const action = `${message.action}.${message.data.clusterId || ''}`

    if (!this._toSend[action]) {
      this._toSend[action] = []
    }

    // cb()
    this._toSend[action].push(cb)

    if (this._toSend[action].length === 1) {
      // if only one item - execute
      cb()
    }
  }

  receive (message) {
    const action = `${message.action}.${message.clusterId || ''}`

    if (!this._toSend[action]) {
      this._toSend[action] = []
    }

    // remove executed
    this._toSend[action].shift()

    if (this._toSend[action].length > 0) {
      // if we have many items, execute only last
      // others - drop
      const lastCb = this._toSend[action].pop()
      this._toSend[action] = [lastCb]
      lastCb()
    }
  }

  /**
   * Call cb in no data for send to workers
   * or data exist
   */
  checkQueue() {
    let isEmpty = true
    for (const action in this._toSend) {
      if (this._toSend[action].length > 0) {
        isEmpty = false
        break
      }
    }

    if (isEmpty === true) {
      this._onEnd()
    } else {
      this._onWait()
    }
  }

  clean () {
    this._toSend = {}
  }
}
