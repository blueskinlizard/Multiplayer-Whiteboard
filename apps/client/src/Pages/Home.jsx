import { useState, useEffect } from "react"
export default function Home(){
    //Page will display owned whiteboards, shared whiteboards, and offer user to create new ones of each
    const [ownedWhiteboards, setOwnedWhiteboards] = useState([])
    const [sharedWhiteboards, setSharedWhiteboards] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    //Both are simply arrays of whiteboard names and creation dates

    useEffect(() =>{
        const findCurrentUser = async() =>{
            const fetchedCurrentUser = await fetch('http://localhost:8080/api/currentuser');
            const parsedCurrentUser = await fetchedCurrentUser.json();
            setCurrentUser(parsedCurrentUser);
        }
        const findOwnedWhiteboards = async() =>{
            const fetchedUserWhiteboards = await fetch(`http://localhost:8080/api/allwhiteboards`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ inputtedUser: currentUser})
                //Async errors may arise from the reference of state in useEffect(async shenanigans),
                //if an error happens, it's likely here
                
            })
            const userWhiteboards = await fetchedUserWhiteboards.json();
            setOwnedWhiteboards(userWhiteboards);
        }
        const findSharedWhiteboards = async() =>{
            const fetchedSharedWhiteboards = await fetch(`http://localhost:8080/api/findsharedwhiteboards`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ userToSearch: currentUser.id})
                //Risky state inclusion due to async
            })
            const sharedWhiteboards = fetchedSharedWhiteboards.json();
            //Reason we dont use (prev) =>[...prev, newthing] is because in this useffect we are not dynamically changing our state, 
            // but rather doing it once
            setSharedWhiteboards(sharedWhiteboards);
            //INITIAL FETCH OF SHARED BOARDS, NOT A TANSTACK FETCH
        }
    }, [])
    
    const refreshSharedWhiteboards = async() =>{
        
    }
    return(
        <div>
            <h1>Homepage!</h1>
            <h3>Owned whiteboards:</h3>
            <h3>Shared with you:</h3>
        </div>
    )
}