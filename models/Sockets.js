
class Sockets {

    constructor(io){

        this.io = io;
        this.SocketEvents()

    }

    SocketEvents(){

        //on connection
        this.io.on('connection', (socket) => {
            //Escuchar evento 
            socket.on('msg-to-server', (data)=>{
              console.log(data)
          
              this.io.emit('msg-from-server', data)
            })
          });
    }

}

module.exports = Sockets;