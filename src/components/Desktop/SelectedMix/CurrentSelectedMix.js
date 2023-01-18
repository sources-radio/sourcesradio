import "./CurrentSelectedMixStyles.css"
import { ImPause2, ImPlay3 } from 'react-icons/im'

export default function SelectedMix(props){

    const handleMouseOver = () => {
        props.data.setIsTracklistOpen(true);
    };

    const handleMouseOut = () => {
        props.data.setIsTracklistOpen(false);
    };

    function handleClick(){
        console.log("handle click");
        if(props.data.currentPlayingMix.title === props.data.currentSelectedMix.title)
        {

            console.log("handle click: app state " + props.data.appState);
            if(props.data.appState == "pause" || props.data.appState == "startup")
                props.data.setAppState("playing");

            return;
        }

        props.data.setAppState("switching");
        props.data.setCurrentPlayingMix(props.data.currentSelectedMix);

        setTimeout(() => {
            props.data.setAppState("playing");
        }, 100);
    }

    function getPlayPauseButton()
    {
        
        if(props.data.currentPlayingMix.title !== props.data.currentSelectedMix.title )
        {
            return(<ImPlay3  className="selectedPlay transitionText" style={{color: props.data.textColor}}/>);
        } 

        if(props.data.currentPlayingMix.title === props.data.currentSelectedMix.title)
        {
            return(props.data.playState ? null : <ImPlay3   className="selectedPlay transitionText" style={{color: props.data.textColor}}/>)
        }
        else
        {
            return(<ImPlay3  className="selectedPlay transitionText" style={{color: props.data.textColor}}/>);
        }
    }

    return(
        <div className="current">
            <button onClick={handleClick} className="pauseToggle" style={{color: props.data.textColor}}>
                {getPlayPauseButton()}
            </button>
            <div className="title transitionText" style={{color: props.data.textColor}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {props.data.currentSelectedMix.title}
            </div>
       </div>
   )
} 