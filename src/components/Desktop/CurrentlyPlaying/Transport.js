import './TransportStyles.css'
import { FaPause } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { ImPause2, ImPlay3 } from 'react-icons/im'

export default function Transport(props){

    var button = props.data.playState ? <ImPause2 onClick={() => props.data.pauseToggle()} size={30} className="playPause"/> : <ImPlay3 size={30} onClick={() => props.data.pauseToggle()} className="playPause"/>
    return(
        <div className="transport">
            {button}
            <div className="currentMix">
                {props.data.currentPlayingMix.title}
            </div>
            <div className='blackLine'>

            </div>
            <div className="currentTime">
                {props.data.currentTime}
            </div>
        </div>
    )
}