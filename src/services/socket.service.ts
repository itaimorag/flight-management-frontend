import io,{Socket} from 'socket.io-client'

export const SOCKET_EVENT_FLIGHT_UPDATE = 'flight-update'


// export const SOCKET_EMIT_SET_TOPIC = 'code-set-topic'
// export const SOCKET_EVENT_CHECK_MENTOR= 'check-is-mentor'

const baseUrl = (process.env.NODE_ENV === 'production') ? '' : '//localhost:3030'
export const socketService = createSocketService()

// for debugging from console
// window.socketService = socketService
socketService.setup()

function createSocketService() {
  var socket:Socket|null = null
  const socketService = {
    setup() {
      socket = io(baseUrl)
    },
    on(eventName:string, cb:any) {
      socket?.on(eventName, cb)
    },
    off(eventName:string, cb = null) {
      if (!socket) return;
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName:string, data:any) {
      if(!data) {
        socket?.emit(eventName)
        return
      }
      data = JSON.parse(JSON.stringify(data))
      socket?.emit(eventName, data)
    },
   
  }
  return socketService
}


