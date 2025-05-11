import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
export default function WhiteboardCard(props){
    const [sharedName, setSharedName] = useState();

    useEffect(() =>{
        const fetchSharerId = async() =>{
            //Yes I could make an entirely separate backend route, that utilizes our findUserById query,
            //But I'm too lazy to do so
            if(props.whiteboardId){
                //As we utilize this component for displaying both owned & shared drawings, we do not need to fetch
                //Anything when our whiteboardId isn't specified, signifying that we are using this component for ownedwhiteboards
                try{
                    
                    const fetchedSharerObject = await fetch(`http://localhost:8080/api/findwhiteboardowner/${props.whiteboardId}`);
                    if (!fetchedSharerObject.ok) {
                        const text = await fetchedSharerObject.text();
                        console.log(`Failed to fetch. Status: ${fetchedSharerObject.status}. Response text: ${text}`);
                        return;
                    }
                    const sharerObject = await fetchedSharerObject.json();
                    console.log("Sharer Object: "+sharerObject.whiteboardOwner.name);
                    setSharedName(sharerObject.whiteboardOwner.name);
                }catch(err){
                    console.log("No sharers found:" +err);
                }
            }
        }
        fetchSharerId();
    }, [])

    return(
       <div>
            <Link to={`/whiteboard/${props.whiteboardId}`}>
            <h2>{props.whiteboardTitle}</h2>
            <h3>{props.whiteboardId}</h3>
            {props.whiteboardId && (
                <h3>Shared by: {sharedName ? sharedName : "Loading..."}</h3>
            )}
            </Link>
       </div>
    )
}