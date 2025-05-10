import { useState, useEffect } from "react"
import WhiteboardCard from "../Components/WhiteboardCard"
import { useNavigate } from "react-router-dom"
export default function Home(){
    //Page will display owned whiteboards, shared whiteboards, and offer user to create new ones of each
    const [ownedWhiteboards, setOwnedWhiteboards] = useState([])
    const [sharedWhiteboards, setSharedWhiteboards] = useState([])
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const redirect = useNavigate();
    //Both are simply arrays of whiteboard names and creation dates

    useEffect(() =>{
        
        const fetchUserAndBoards = async () => {
            try {
                const fetchedCurrentUser = await fetch('http://localhost:8080/api/currentuser', { credentials: "include"});
                const userData = await fetchedCurrentUser.json();

                const user = userData.currentUser

                setCurrentUser(user);
                if (!user || !user.id) {
                    console.error("Invalid user object received:", user);
                    setError("Invalid user data received");
                    setLoading(false);
                    redirect("/");
                    return;
                }

                const fetchedOwnedWhiteboards = await fetch('http://localhost:8080/api/allwhiteboards', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({ inputtedUser: user })
                });
                if (!fetchedOwnedWhiteboards.ok) {
                    console.error("Failed to fetch owned whiteboards:", await fetchedOwnedWhiteboards.text());
                    setOwnedWhiteboards([]); 
                    }else {
                        const owned = await fetchedOwnedWhiteboards.json();
                        console.log("Owned response:", owned);
                        setOwnedWhiteboards(owned?.ownedWhiteboards || []);
                    }

                const fetchSharedWhiteboards = await fetch('http://localhost:8080/api/findsharedwhiteboards', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({ userToSearch: user })
                });
                const shared = await fetchSharedWhiteboards.json();
                setSharedWhiteboards(shared);
                console.log("Shared response:", shared);

                
            } catch(err) {
                console.error("Error fetching data:", err);
            }
            finally {
                setLoading(false); // Add this line here
            }
        };
        fetchUserAndBoards();
        //Reason for rework(fetching everything in same method), is that we cannot reference our currentuser state(async),
        //if it isn't declared in a linear manner, so this useffect has been changed to do so. 
    }, [])


    if (loading) {
        return <div>Loading your whiteboards...</div>;
    }

    if (!currentUser) {
        return <div>Loading user data...</div>
    }

    return(
        <div>
            <h1>Homepage!</h1>
            <h3 id="OwnedWhiteboardTitle">Owned whiteboards:</h3>
            {console.log("Render length" + ownedWhiteboards.length)}
            {console.log("currentUser: "+currentUser)}
            {console.log("currentUserId: "+currentUser.id)}
            {console.log("currentUserName: "+currentUser.name)}
            {Array.isArray(ownedWhiteboards) && ownedWhiteboards.length > 0 ? (
            ownedWhiteboards.map((value, index) => (
                <WhiteboardCard key={`OwnedWhiteboardCard:${index}`} whiteboardTitle={value.name} whiteboardId={value.id}/>
            ))
            ) : (
                <p>No owned whiteboards found.</p>
            )}

            <h3 id="SharedWhiteboardTitle">Shared with you:</h3>
            {Array.isArray(sharedWhiteboards) && sharedWhiteboards.length > 0 ? (
            sharedWhiteboards.map((value, index) => (
                <WhiteboardCard key={`SharedWhiteboardCard:${index}`} whiteboardTitle={value.name} whiteboardId={value.id} />
            ))
            ) : (
                <p>No shared whiteboards found.</p>
            )}
    </div>
    )
}