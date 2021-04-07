import io from 'socket.io-client';

const socketConnection = io('http://localhost:8000');

export default socketConnection;
