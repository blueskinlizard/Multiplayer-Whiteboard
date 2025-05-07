import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
export default function WhiteboardPage(){
    const [currentUser, setCurrentUser] = useState(null);
    //I dislike context + state managers, why not just fetch user data from Redis??
    const [whiteboardState, setWhiteboardState] = useState(null);
    const [drawing, setDrawing] = useState(false);
    const whiteboardID = useParams();
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
            const currenUserData = await fetchedCurrentUserData.json();
            const fetchedWhiteboardOwner = await fetch(`/findwhiteboardowner/${whiteboardID}`)
            if(currentUserData.name !== fetchedWhiteboardOwner.name){
                //If statement for shared whiteboard logic goes here
                //For now it will just redirect
                redirect("/home");
            }
            setCurrentUser(currenUserData)
        }
        const websocketConfiguration = async() =>{
            const socket = new WebSocket("ws://localhost:3000");
            socket.on('connect', () =>{
                setWhiteboardStatus("Connected to whiteboard successfully");
            })
        }
        const fetchAllDrawings = async() =>{
            const fetchedDrawingIds = await fetch(`http://localhost:8080/api/getalldrawingidswhiteboard/${whiteboardID}`);
            const drawingIds = await fetchedDrawingIds.json();
            drawingIds.forEach(id => {
                //Render drawings based off fetches into render methods
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
      const handleMouseUp = async () => {
        setDrawing(false);
        if (currentStroke.length > 1) {
            //Actual drawing creation post logic after mouse lifted(drawing process ceased, causing storage + websocket emission)
            
            await fetch(`http://localhost:8080/api/newdrawing`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ drawingData: currentStroke, whiteboardToAdd: whiteboardID})
            })
        }
        setCurrentStroke([]);
      };
    //I don't think I'm just supposed to leave this w/o a method, I'll probably change the position of socket receptions in general
    socket.on("receive-drawing", (drawingData, drawingKey) =>{

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