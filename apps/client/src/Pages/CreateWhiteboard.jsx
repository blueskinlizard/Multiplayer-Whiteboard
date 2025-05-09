import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function createdWhiteboard(){
    const [currentUser, setCurrentUser] = useState();
    const redirect = useNavigate();
    useEffect(()=>{
        const fetchUserData = async() =>{
            const fetchedCurrentUser = await fetch('http://localhost:8080/api/currentuser');
            if(!fetchedCurrentUser){ redirect("/"); }
            const user = await fetchedCurrentUser.json();
            setCurrentUser(user);
        }
        
        fetchUserData();
    }, [])

    const onFormSubmission = async(submittedForm) =>{
        submittedForm.preventDefault();
        const form = submittedForm.target;
        const whiteboardName = form.whiteboardname.value;
        formLogic(whiteboardName);
    }
    const formLogic = async(whiteboardTitle) =>{
        const createdWhiteboard = await fetch(`http://localhost:8080/api/newwhiteboard`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ whiteboardName: whiteboardTitle})
        })
    }
    return(
        <div className="CreateWhiteboardWrapper">
            <h1>Create new whiteboard:</h1>
            <form id="CreateWhiteboardForm" onSubmit={onFormSubmission}>
                <input type="text" id="usernameInput" placeholder="Name of Board" name="whiteboardname"></input>
                <button type="submit" id="CreateWhiteboardButton">Create Whiteboard</button>
            </form>
        </div>
    )
}