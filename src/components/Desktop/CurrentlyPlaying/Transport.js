import './TransportStyles.css'
import { FaPause } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { ImPause2, ImPlay3 } from 'react-icons/im'

export default function Transport(props){

    function pad(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }
    
    var button = props.data.playState ? <ImPause2 onClick={() => props.data.pauseToggle()} size={30} className="playPause"/> : <ImPlay3 size={30} onClick={() => props.data.pauseToggle()} className="playPause"/>
    return(
        <div className="transport">
            {button}
            <div className="currentMix">
                {props.data.currentPlayingMix.title}
            </div>
            <div className='blackLine'>

            </div>
            <div className='currentInfo'>
                <div className="currentTime">
                    {pad(props.data.currentTime, 4)}
                </div> 
                <pre className='currentSong'>
                    {props.data.currentSong?.song}
                </pre>
                <pre className='currentArtist'>
                    {props.data.currentSong?.artist}
                </pre>
            </div>
       </div>
    )
}