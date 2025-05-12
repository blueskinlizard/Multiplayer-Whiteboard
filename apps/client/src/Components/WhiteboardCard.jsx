import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
export default function WhiteboardCard(props){
    const [sharedName, setSharedName] = useState();
    const [splicedInitials, setSplicedInitials] = useState()
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
                    const charArray = sharerObject.whiteboardOwner.name.split('');
                    setSplicedInitials((charArray[0].toUpperCase() + charArray[1]));
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
            {/* <Avatar sx={{ bgcolor: deepPurple[500] }}>{splicedInitials ? splicedInitials : "Loading..."}</Avatar> */}
            <Typography variant="h3" sx={{color: 'black', pb: 3 }}>{props.whiteboardTitle}</Typography>
            <Typography variant="p" sx={{color: '#646cff', fontFamily: 'sans-serif'}}>{props.whiteboardId}</Typography>
            {props.whiteboardId && (
                <h3>Shared by: {sharedName ? sharedName : "Loading..."}</h3>
            )}
            </Link>
       </div>
    )
}