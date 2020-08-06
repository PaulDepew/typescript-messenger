import * as express from 'express';
import * as socketio from 'socket.io';
import * as http from 'http';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const io: socketio.Server = socketio(server);

app.use(express.static('./public'));

interface Payload {
  createdAt: string;
  text: string;
}

app.get('/messages', (req: express.Request, res: express.Response): void => {
  console.log(req.query);
  res.send('Messages will be here!')
})


io.on('connection', (socket: socketio.Socket): void => {
  console.log('connected to our socket');

  socket.on('message', (message: Payload): void => {
    console.log(message)
  })
});

export default {
  start: (port:number): void => {
    server.listen(port, (): void =>{
        console.log(`OUR APP IS RUNNING ON PORT:: ${port}`);
    });
  },
};