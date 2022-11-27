import './MobileCurrentPlayingStyles.css'
import { ImPause2, ImPlay3 } from 'react-icons/im'

export default function MobileCurrentPlaying(props){

    var button = props.data.playState ? <ImPause2 onClick={() => props.data.pauseToggle()} size={30} className="mobilePlayPause"/> : <ImPlay3 size={30} onClick={() => props.data.pauseToggle()} className="mobilePlayPause"/>
    
    function pad(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }
 
    return(
        <div className='mobileCurrentPlaying'>
            <div className='mobileControl'>
                {button}
                <div className="mobileCurrentMix">
                    {props.data.currentPlayingMix.title}
                    
                </div>
                <div className='mobileBlackLine'>
            </div>
            <div className='mobileTime'>
                <div className="mobileCurrentTime">
                    {pad(props.data.currentTime, 4)}
                </div>        
                <div className='mobileCurrentSong'>
                    {props.data.currentSong?.song}
                </div>
                <div className='mobileCurrentArtist'>
                    {props.data.currentSong?.artist}
                </div>
    
            </div>
       </div>
           
                        
        </div>
    )
    
}