import { useState, useEffect, useRef } from "react";
import { useQuery} from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
export default function WhiteboardPage(){
    const [currentUser, setCurrentUser] = useState(null);
    //I dislike context + state managers, why not just fetch user data from Redis??
    const [whiteboardState, setWhiteboardState] = useState(null);
    const whiteboardID = useNavigate();
    const canvasRef = useRef(null);
    const [currentStroke, setCurrentStroke] = useState([]);

    useEffect(() =>{
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
      const handleMouseUp = () => {
        setDrawing(false);
        if (currentStroke.length > 1) {
          onDrawComplete(currentStroke);
        }
        setCurrentStroke([]);
      };
    
    return(
        <div>
            <canvas></canvas>
        </div>
    )
}