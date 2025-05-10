import { useState, useEffect } from "react";

export default function SharePage(){
    const [currentUser, setCurrentUser] = useState()
    useEffect(() =>{
        const fetchUserData = async() =>{
            const fetchedCurrentUserData = await fetch('http://localhost:8080/api/currentuser')
            if(!fetchedCurrentUserData.ok){
                redirect("/home")
            }
            const currentUserData = await fetchedCurrentUserData.json();
            setCurrentUser(currentUserData);
        }
    }, [])
    const sendRequest = async(recipientParam, whiteboardParam) =>{

    }
    const handleFormData = (submittedForm) =>{
        submittedForm.preventDefault();
        const form = submittedForm.target;
        const whiteboardName = form.whiteboardname.value;
        const recipientName = form.recipientName.value;
        sendRequest(recipientName, whiteboardName);
    }
    return(
        <div className="ShareWhiteboarddWrapper">
            <h1>Share whiteboard:</h1>
            <form id="CreateWhiteboardForm" onSubmit={onFormSubmission}>
                <input type="text" id="whiteboardInput" placeholder="Name of Board" name="whiteboardname"></input>
                <input type="text" id="recipientInput" placeholder="Share with:"></input>
                <button type="submit" id="CreateWhiteboardButton">Send whiteboard</button>
            </form>
        </div>
    )
}