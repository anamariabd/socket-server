const express = require('express')
const http = require('http')
const socketio =  require('socket.io')
const path = require('path');  //viene instalado en express
const Sockets = require('./Sockets');
const cors = require('cors')

class Server{

    constructor(){
     
      this.app = express();
      this.port = process.env.PORT;
      this.server = http.createServer(this.app);

      //configuración de socket
      this.io = socketio(this.server, {/* configuraciones.. */})
    }

    middlewares(){

      //despliegue de directorio público
      this.app.use(express.static( path.resolve(__dirname, '../Public') ))

      this.app.use(cors())
    }

    configSockets(){
        new Sockets(this.io);
    }

    execute(){

        //inicializar middlewares
        this.middlewares();

        //inicializar sockets
        this.configSockets();

        this.server.listen(this.port, ()=>{
            console.log('server corriendo en puerto :', this.port)
        });
    }
}

module.exports = Server;