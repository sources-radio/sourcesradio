import "./CurrentSelectedMixStyles.css"
import { ImPause2, ImPlay3 } from 'react-icons/im'

export default function SelectedMix(props){

    const handleMouseOver = () => {
        props.data.setIsTracklistOpen(true);
    };

    const handleMouseOut = () => {
        props.data.setIsTracklistOpen(false);
    };

    function setNewMix(){
        if(props.data.currentSelectedMix.title === props.data.currentPlayingMix.title)
        {
            props.data.pauseToggle();
        }
        else
        {
            props.data.setCurrentPlayingMix(props.data.currentSelectedMix)
            setTimeout(() => {
                if(!props.data.playState)
                    props.data.pauseToggle();
            }, 100);
        }
    }

    function getPlayPauseButton()
    {
        if(props.data.playState)
        {
            return null;
        }
        if(props.data.currentPlayingMix.title === props.data.currentSelectedMix.title)
        {
            return(props.data.playState ? null : <ImPlay3  onClick={() => props.data.pauseToggle()} className="selectedPlay transitionText" style={{color: props.data.textColor}}/>)
        }
        else
        {
            return(<ImPlay3  onClick={() => props.data.pauseToggle()} className="selectedPlay transitionText" style={{color: props.data.textColor}}/>);
        }
    }

    return(
        <div className="current">
            <button onClick={setNewMix} className="pauseToggle" style={{color: props.data.textColor}}>
                {getPlayPauseButton()}
            </button>
            <div className="title transitionText" style={{color: props.data.textColor}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {props.data.currentSelectedMix.title}
            </div>
       </div>
   )
}