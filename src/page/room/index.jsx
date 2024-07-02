import React from 'react'
import { useParams} from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const { roomId}= useParams();

    const myMeeting = async(element)=>{
        const appID = 1268538864;
        const serverSecret = "7fb4279285265de9cbdd9b91541f039c";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId ,Date.now().toString(), 'Prafull');
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference
            }
        })

    }



  return (
    <div className='rooom-page'>
      <div ref={myMeeting}/>
    </div>
  )
}

export default RoomPage
