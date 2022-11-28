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
        left: `${210 + pos}px`,
        color: props.data.textColor
    }
    
    var button = props.data.playState ? <ImPause2 onClick={() => props.data.pauseToggle()} size={30} className="playPause" style={{color: props.data.textColor}}/> : <ImPlay3 size={30} onClick={() => props.data.pauseToggle()} className="playPause" style={{color: props.data.textColor}}/>
    return(
        <div className="transport">
            {button}
            <div className="currentMix" style={{color: props.data.textColor}}>
                {props.data.currentPlayingMix.title}
            </div>
            <div className='blackLine' style={{backgroundColor: props.data.textColor}}>

            </div>
            <div className='currentInfo' style={transportPos}>
                <div className="currentTime" style={{color: props.data.textColor}}>
                    {pad(props.data.currentTime, 4)}
                </div> 
                <pre className='currentSong' style={{color: props.data.textColor}}>
                    {props.data.currentSong?.song}
                </pre>
                <pre className='currentArtist' style={{color: props.data.textColor}}>
                    {props.data.currentSong?.artist}
                </pre>
            </div>
       </div>
    )
}