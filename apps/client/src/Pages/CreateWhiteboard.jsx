import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function CreateWhiteboard(){
    const redirect = useNavigate();
    useEffect(()=>{
        const fetchUserData = async() =>{
            const fetchedCurrentUser = await fetch('http://localhost:8080/api/currentuser');
            //Given that the only purpose of fetching our current user is to redirect our user or not,
            //No more logic really needs to be added, as long as they exist, the cookies will do the rest. 
            if(!fetchedCurrentUser){ redirect("/"); }
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
        await fetch(`http://localhost:8080/api/newwhiteboard`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ whiteboardName: whiteboardTitle})
        })
        redirect("/home");
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