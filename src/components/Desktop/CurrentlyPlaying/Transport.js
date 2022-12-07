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

    let pos = ((Number(props.data.currentTime) / Number(props.data.currentPlayingMix.duration) * (window.innerWidth - 300)));
    let transportPos = {
        left: `${200 + pos}px`,
        color: props.data.textColor
    }
    
    var button = props.data.playState ? <ImPause2 onClick={() => props.data.pauseToggle()}  className="playPause" style={{color: props.data.textColor}}/> : <ImPlay3 onClick={() => props.data.pauseToggle()} className="playPause" style={{color: props.data.textColor}}/>
    return(
        <div className="transport">
            {button}
            <div className="currentMix" style={{color: props.data.textColor}}>
                {props.data.currentPlayingMix.title}
            </div>
            <div className="currentDuration" style={{color: props.data.textColor}}>
                (D){props.data.currentPlayingMix.duration}
            </div>
            <div className='blackLine' style={{backgroundColor: props.data.textColor}}>

            </div>
            <div className='currentInfo' style={transportPos}>
                <div className="currentTime" style={{color: props.data.textColor}}>
                    {props.data.currentTime == 0 ? "" : pad(props.data.currentTime, 4)}
                </div> 
                <div className='currentSong' style={{color: props.data.textColor}}>
                    {props.data.currentSong?.song}
                </div>
                <div className='currentArtist' style={{color: props.data.textColor}}>
                    {props.data.currentSong?.artist}
                </div>
            </div>
       </div>
    )
}