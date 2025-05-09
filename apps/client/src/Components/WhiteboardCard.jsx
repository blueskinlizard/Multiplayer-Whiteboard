import { useEffect, useState } from "react"

export default function WhiteboardCard(props){
    const [sharedName, setSharedName] = useState();

    useEffect(() =>{
        const fetchSharerId = async() =>{
            //Yes I could make an entirely separate backend route, that utilizes our findUserById query,
            //But I'm too lazy to do so
            if(!props.whiteboardId){
                //As we utilize this component for displaying both owned & shared drawings, we do not need to fetch
                //Anything when our whiteboardId isn't specified, signifying that we are using this component for ownedwhiteboards
                const fetchedSharerObject = await fetch(`/findwhiteboardowner/${props.whiteboardId}`);
                const sharerObject = await fetchSharerId.json();
                setSharedName(sharerObject.name);
            }
        }
        fetchSharerId();
    }, [])

    return(
       <div>
            <h1>{props.whiteboardTitle}</h1>
            <h3>Shared by: {sharedName ? sharedName : "Loading..."}</h3>
       </div>
    )
}