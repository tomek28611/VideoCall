import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react';
import { useParams } from "react-router-dom";



const Room = () => {
    const { roomID } = useParams();
  
    const meeting = async (element) => {
        const appID = 683252004;
        const serverSecret = "8b9d00206e541ff0a288c98d298707bd";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().
        toString(), "tomek286");

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });
    };

  return (
    <div ref={meeting} style={{ width: "100vw", height: "100vw"}}>

    </div>
  )
}

export default Room;