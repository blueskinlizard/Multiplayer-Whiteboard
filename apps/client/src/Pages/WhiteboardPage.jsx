import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom"
import { io } from "socket.io-client";;
export default function WhiteboardPage(){
    const [currentUser, setCurrentUser] = useState(null);
    //I dislike context + state managers, why not just fetch user data from Redis??
    const [drawing, setDrawing] = useState(false);
    const { whiteboardID } = useParams();
    const canvasRef = useRef(null);
    const [currentStroke, setCurrentStroke] = useState([]);
    const redirect = useNavigate();
    const [whiteboardStatus, setWhiteboardStatus] = useState();
    const socketRef = useRef(null); //Websocket reference

    useEffect(() =>{
        console.log("Current whiteboard: "+whiteboardID)
        const fetchUserValues = async() =>{
            const fetchedCurrentUserData = await fetch('http://localhost:8080/api/currentuser')
            if(!fetchedCurrentUserData.ok){
                redirect("/home")
            }
            const currentUserData = await fetchedCurrentUserData.json();
            const fetchedWhiteboardOwner = await fetch(`http://localhost:8080/api/findwhiteboardowner/${whiteboardID}`)

            //Find people user has shared this whiteboard with

            if(currentUserData.id !== fetchedWhiteboardOwner.id ){
                try{
                    const fetchSharedUsers = await fetch(`http://localhost:8080/api/findsharedwhiteboards/`, {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        credentials: "include",
                        body: JSON.stringify({ userToSearch: currentUserData.name, whiteboardToSearch: whiteboardID})
                    })
                    const sharedUsers = await fetchSharedUsers.json();
                    if (currentUserData.id !== sharedUsers.ReceiverId){
                        redirect("/");
                    }
                }catch(err){ console.log(`Error caught while fetchingSharedUsers during login, specifically: ${err}`); redirect("/home"); return;}
                //Fetch shared whiteboards table, specified via the whiteboardToSearch, checking if our requested user has been shared to
            }
            setCurrentUser(currentUserData)
        }
        const fetchAllDrawings = async() =>{

            const fetchedDrawingIds = await fetch(`http://localhost:8080/api/getalldrawingidswhiteboard/${whiteboardID}`);
            const drawingIds = await fetchedDrawingIds.json();
            console.log("Drawing Ids: "+drawingIds.whiteboardIds)
            if (!fetchedDrawingIds.ok) {
                console.error("Failed to fetch drawing IDs");
                return;
            }
            drawingIds.whiteboardIds.forEach(async id => {
                //Render drawings based off fetches into render methods
                try{
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
                }catch(err){ console.log(`Error while fetching drawingdata of whiteboard ${whiteboardID}`); return}
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
        fetchAllDrawings();

    }, [whiteboardID]);
    useEffect(() => {
        const socket = io("http://localhost:8080", {withCredentials: true,}); //Declaration
        socketRef.current = socket;
        socketRef.current.on('connect', () => {
            setWhiteboardStatus("Connected to whiteboard successfully");
        });
        if (whiteboardID) {
            socketRef.current.emit('join-room', { whiteboardJoined: whiteboardID });
        }
        socketRef.current.on("receive-drawing", async (drawingObject, drawingKey) => {
            renderDrawingCoordinates(drawingObject.strokeData);
        })
        return () => {
            if (socketRef.current) {
            socketRef.current.disconnect();
            }
        };
    }, [whiteboardID]);
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
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
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
            try{
                const createdDrawing = await fetch(`http://localhost:8080/api/newdrawing`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({ drawingData: storedDrawingData, whiteboardToAdd: whiteboardID})
                    
                })
                const drawingObject = await createdDrawing.json();
                socketRef.current.emit('new-drawing', {drawingData: drawingObject, whiteboardToAdd: whiteboardID})
            }catch(err){ console.log(`Error caught while creating drawing, specifically: ${err}`); return}
        }
        setCurrentStroke([]);
      };
    return(
        <div>
            <canvas ref={canvasRef} style={{ border: '1px solid black', cursor: 'crosshair' }} 
            onMouseDown={handleMouseDown} 
            onMouseUp={handleMouseUp} 
            onMouseMove={handleMouseMove}></canvas>
        </div>
    )
}