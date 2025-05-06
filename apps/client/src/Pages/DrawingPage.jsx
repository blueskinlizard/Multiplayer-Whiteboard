import { useState, useEffect } from "react";
import { useQuery} from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
export default function DrawingPage(){
    const [currentUser, setCurrentUser] = useState(null);
    //I dislike context + state managers, why not just fetch user data from Redis??
    const [whiteboardState, setWhiteboardState] = useState(null);
    const whiteboardID = useNavigate();
    
    useEffect(() =>{

    }, [])
    return(

    )
}