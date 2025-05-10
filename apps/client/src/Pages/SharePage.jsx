import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function SharePage(){
    const redirect = useNavigate();
    const [currentUser, setCurrentUser] = useState();
    useEffect(() =>{
        const fetchUserData = async() =>{
            const fetchedCurrentUserData = await fetch('http://localhost:8080/api/currentuser')
            if(!fetchedCurrentUserData.ok){
                redirect("/home")
            }
            const currentUserData = await fetchedCurrentUserData.json();
            setCurrentUser(currentUserData);
        }
        fetchUserData();
    }, [])
    const sendRequest = async(recipientParam, whiteboardParam) =>{
        //Whiteboard param is ID, while recipient param is name
        const sentWhiteboard = await fetch(`http://localhost:8080/api/sharenewboard`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ receiverName: recipientParam, whiteboardId: whiteboardParam})
        })
        if(sentWhiteboard.ok){
            redirect("/home");
        }
    }
    const handleFormData = (submittedForm) =>{
        submittedForm.preventDefault();
        const form = submittedForm.target;
        const whiteboardName = form.whiteboardname.value;
        const recipientName = form.recipientname.value;
        sendRequest(recipientName, whiteboardName);
    }
    return(
        <div className="ShareWhiteboarddWrapper">
            <h1>Share whiteboard:</h1>
            <form id="CreateWhiteboardForm" onSubmit={handleFormData}>
                <input type="text" id="whiteboardInput" placeholder="Name of Board" name="whiteboardname"></input>
                <input type="text" id="recipientInput" placeholder="Share with:" name="recipientname"></input>
                <button type="submit" id="CreateWhiteboardButton">Send whiteboard</button>
            </form>
        </div>
    )
}