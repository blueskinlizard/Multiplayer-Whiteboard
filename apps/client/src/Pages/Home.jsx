import { useState, useEffect } from "react"
import WhiteboardCard from "../Components/WhiteboardCard"
export default function Home(){
    //Page will display owned whiteboards, shared whiteboards, and offer user to create new ones of each
    const [ownedWhiteboards, setOwnedWhiteboards] = useState([])
    const [sharedWhiteboards, setSharedWhiteboards] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    //Both are simply arrays of whiteboard names and creation dates

    useEffect(() =>{
        const fetchUserAndBoards = async () => {
            try {
                const fetchedCurrentUser = await fetch('http://localhost:8080/api/currentuser');
                const user = await fetchedCurrentUser.json();
                setCurrentUser(user);

                const fetchedOwnedWhiteboards = await fetch('http://localhost:8080/api/allwhiteboards', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({ inputtedUser: user })
                });
                const owned = await fetchedOwnedWhiteboards.json();
                setOwnedWhiteboards(owned);

                const fetchSharedWhiteboards = await fetch('http://localhost:8080/api/findsharedwhiteboards', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({ userToSearch: user.id })
                });
                const shared = await fetchSharedWhiteboards.json();
                setSharedWhiteboards(shared);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        fetchUserAndBoards();
        //Reason for rework(fetching everything in same method), is that we cannot reference our currentuser state(async),
        //if it isn't declared in a linear manner, so this useffect has been changed to do so. 
    }, [])
    return(
        <div>
            <h1>Homepage!</h1>
            <h3>Owned whiteboards:</h3>
            {ownedWhiteboards.map((value, index)=>{
                return <WhiteboardCard key={`OwnedWhiteboardCard:${index}`} whiteboardTitle={value.name}/>
            })}
            <h3>Shared with you:</h3>
            {sharedWhiteboards.map((value, index) =>{
                return <WhiteboardCard key={`SharedWhiteboardCard:${index}`} whiteboardTitle={value.name} whiteboardId={value.id}/>
            })}
        </div>
    )
}