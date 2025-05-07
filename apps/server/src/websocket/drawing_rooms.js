module.exports = (io) => {
    io.on("connection", (socket) => {
      console.log("User connected to whiteboard");
  
      socket.emit("Connection to whiteboard", { status: "connected" });
  
      socket.on("new-drawing", (drawingData, whiteboardToAdd) => {
        socket.to(whiteboardToAdd).emit("receive-message", {
          drawingData,
          whiteboardToAdd,
        });
      });
  
      socket.on("join-room", (whiteboardJoined) => {
        socket.join(whiteboardJoined);
        console.log(`User joined room: ${whiteboardJoined}`);
      });
    });
  };
  