import './TransportStyles.css'
import { FaPause } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';

export default function Transport(props){

    var button = props.data.playState ? <FaPause onClick={() => props.data.pauseToggle()} className="playPause"/> : <FaPlay onClick={() => props.data.pauseToggle()} className="playPause"/>
    return(
        <div className="transport">
            {button}
                
            <div className="currentMix">
                {props.data.currentPlayingMix.title}
            </div>
        </div>
    )
}