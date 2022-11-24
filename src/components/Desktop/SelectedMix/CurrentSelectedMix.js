import "./CurrentSelectedMixStyles.css"

export default function SelectedMix(props){


    function setNewMix(){
        if(props.data.currentSelectedMix.title === props.data.currentPlayingMix.title)
        {
            props.data.pauseToggle();
        }
        else
        {
            if(props.data.playState)
                // props.data.pauseToggle();

            console.log("set current: " + props.data.currentSelectedMix.title)
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
            return(props.data.playState ? "PAUSE" : "PLAY")
        }
        else
        {
            return("PLAY");
        }
    }

    return(
        <div className="current">
            <div className="title">
                {props.data.currentSelectedMix.title}
            </div>
            <button onClick={setNewMix} className="pauseToggle">
                {getPlayPauseButton()}
            </button>
            <div className="duration">
                {props.data.currentSelectedMix.duration}
            </div>
        </div>
   )
}