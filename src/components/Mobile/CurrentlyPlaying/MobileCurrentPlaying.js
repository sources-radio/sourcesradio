import './MobileCurrentPlayingStyles.css'
import { ImPause2, ImPlay3 } from 'react-icons/im'

export default function MobileCurrentPlaying(props){

    var button = props.data.playState ? <ImPause2 onClick={() => props.data.pauseToggle()} size={30} className="mobilePlayPause"/> : <ImPlay3 size={30} onClick={() => props.data.pauseToggle()} className="mobilePlayPause"/>

    return(
        <div className='mobileCurrentPlaying'>
            <div className='mobileControl'>
                {button}
                <div className="mobileCurrentMix">
                    {props.data.currentPlayingMix.title}
                    
                </div>
                <div className='mobileBlackLine'>
            </div>
            <div className="mobileCurrentTime">
                {props.data.currentTime}
            </div>        
        </div>
           
                        
        </div>
    )
    
}