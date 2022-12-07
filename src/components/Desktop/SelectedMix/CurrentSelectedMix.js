import "./CurrentSelectedMixStyles.css"
import { ImPause2, ImPlay3 } from 'react-icons/im'

export default function SelectedMix(props){

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
        if(props.data.currentPlayingMix.title === props.data.currentSelectedMix.title)
        {
            return(props.data.playState ? null : <ImPlay3  onClick={() => props.data.pauseToggle()} className="selectedPlay" style={{color: props.data.textColor}}/>)
        }
        else
        {
            return("PLAY");
        }
    }

    return(
        <div className="current">
            <button onClick={setNewMix} className="pauseToggle" style={{color: props.data.textColor}}>
                {getPlayPauseButton()}
            </button>

            <div className="title" style={{color: props.data.textColor}}>
                                
                {props.data.currentSelectedMix.title}
            </div>
       </div>
   )
}