import { Server } from "socket.io";

const SocketHandler = (req: any, res: any) => {
    if (res.socket.server.io) {
        console.log("Already set up");
        res.end();
        return;
    }

    const io : any = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket: any) => {
        socket.on("send-message", (obj: any) => {
            io.emit("receive-message", obj);
        });
    });

    console.log("Setting up socket");
    res.end();
}

export default SocketHandler