module.exports = (io) => {
    io.on("connection", (socket) => {
      console.log("User connected to whiteboard");
  
      socket.emit("Connection to whiteboard", { status: "connected" });
  
      socket.on("new-drawing", (data) => {
        const {drawingData, whiteboardToAdd} = data;
        socket.to(whiteboardToAdd).emit("receive-drawing", drawingData);
      });
  
      socket.on("join-room", (data) => {
        socket.join(data.whiteboardJoined);
        console.log(`User joined room: ${JSON.stringify(data.whiteboardJoined)}`);
      });
      socket.on("disconnect", () => {
        console.log("User disconnected from whiteboard");
      });
    });
  };
  