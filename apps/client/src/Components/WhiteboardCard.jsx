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
                    const fetchedSharerObject = await fetch(`/findwhiteboardowner/${props.whiteboardId}`);
                    const sharerObject = await fetchedSharerObject.json();
                    setSharedName(sharerObject.name);
                }catch(err){
                    console.log("No sharers found");
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