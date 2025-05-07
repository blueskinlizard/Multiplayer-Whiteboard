import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
export default function WhiteboardPage(){
    const [currentUser, setCurrentUser] = useState(null);
    //I dislike context + state managers, why not just fetch user data from Redis??
    const [whiteboardState, setWhiteboardState] = useState(null);
    const [drawing, setDrawing] = useState(false);
    const whiteboardID = useParams(null);
    const canvasRef = useRef(null);
    const [currentStroke, setCurrentStroke] = useState([]);
    const redirect = useNavigate();
    const [whiteboardStatus, setWhiteboardStatus] = useState();

    useEffect(() =>{
        const fetchUserValues = async() =>{
            const fetchedCurrentUserData = await fetch('http://localhost:8080/api/currentuser')
            if(!fetchedCurrentUserData){
                redirect("/home")
            }
            const currentUserData = await fetchedCurrentUserData.json();
            const fetchedWhiteboardOwner = await fetch(`/findwhiteboardowner/${whiteboardID}`)
            if(currentUserData.name !== fetchedWhiteboardOwner.name){
                //If statement for shared whiteboard logic goes here, for now it will just redirect
                redirect("/home");
            }
            setCurrentUser(currentUserData)
        }
        const websocketConfiguration = async() =>{
            const socket = new WebSocket("ws://localhost:3000");
            socket.on('connect', () =>{
                setWhiteboardStatus("Connected to whiteboard successfully");
            })
            if(whiteboardID){ socket.emit('join-room', {whiteboardJoined: whiteboardID}); }
        }
        const fetchAllDrawings = async() =>{
            const fetchedDrawingIds = await fetch(`http://localhost:8080/api/getalldrawingidswhiteboard/${whiteboardID}`);
            const drawingIds = await fetchedDrawingIds.json();
            drawingIds.forEach(async id => {
                //Render drawings based off fetches into render methods
                const fetchedDrawingData = await fetch(`http://localhost:8080/api/getdrawing`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({ drawingKey: id, whiteboardToSearch: whiteboardID})
                })
                const drawingData = await fetchedDrawingData.json();
                renderDrawingCoordinates(drawingData);
            });
        }
        //Whiteboard presets
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const context = canvas.getContext('2d');
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = 2;
        context.strokeStyle = '#000';

        //Connection methods for useffect
        fetchUserValues();
        websocketConfiguration();
        fetchAllDrawings();
    }, [])
    const handleMouseDown = (e) => {
        setDrawing(true);
        const { offsetX, offsetY } = e.nativeEvent;
        setCurrentStroke([{ x: offsetX, y: offsetY }]);
    };
    const handleMouseMove = (e) => {
        if (!drawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const { offsetX, offsetY } = e.nativeEvent;
        const newPoint = { x: offsetX, y: offsetY };
        const lastPoint = currentStroke[currentStroke.length - 1];
    
        //draws the line segment
        ctx.beginPath();
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(newPoint.x, newPoint.y);
        ctx.stroke();
    
        //stores point in stroke state
        setCurrentStroke((prev) => [...prev, newPoint]);
      };
      const renderDrawingCoordinates = (matrix) =>{
        //Takes in set of points to redraw
        if(!matrix){ return }
        ctx.beginPath();
        ctx.moveTo(matrix[0].x, matrix[0].y);
        for (let i = 1; i < matrix.length; i++) {
          ctx.lineTo(matrix[i].x, matrix[i].y);
        }
        ctx.stroke();
      }
      const handleMouseUp = async () => {
        setDrawing(false);
        if (currentStroke.length > 1) {
            //Actual drawing creation post logic after mouse lifted(drawing process ceased, causing storage + websocket emission)
            //The reason we store createdDrawing as a variable is for ID retrieval
            const storedDrawingData = {
                strokeData: currentStroke,
            }
            //A little useless obj declaration but I like it
            const createdDrawing = await fetch(`http://localhost:8080/api/newdrawing`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ drawingData: storedDrawingData, whiteboardToAdd: whiteboardID})
            })
            const drawingObject = await createdDrawing.json();

            socket.emit('new-drawing', {drawingData: drawingObject, whiteboardToAdd: whiteboardID})
            
        }
        setCurrentStroke([]);
      };
    //I don't think I'm just supposed to leave this w/o a method, I'll probably change the position of socket receptions in general
    socket.on("receive-drawing", async(drawingData, drawingKey) =>{
        
    })
    return(
        <div>
            <canvas ref={canvasRef} style={{ border: '1px solid black', cursor: 'crosshair' }} 
            onMouseDown={handleMouseDown} 
            onMouseUp={handleMouseUp} 
            onMouseMove={handleMouseMove}></canvas>
        </div>
    )
}