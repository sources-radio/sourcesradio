import "./CurrentSelectedMixStyles.css"

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
            return(props.data.playState ? "PAUSE" : "PLAY")
        }
        else
        {
            return("PLAY");
        }
    }

    return(
        <div className="current">
            <div className="title" style={{color: props.data.textColor}}>
                {props.data.currentSelectedMix.title}
                {/* <img src={'./mixTitles/' + props.data.currentSelectedMix.title + ".png"} /> */}
                <div className="bottomRow">
                    <button onClick={setNewMix} className="pauseToggle" style={{color: props.data.textColor}}>
                        {getPlayPauseButton()}
                    </button>
                    <div className="duration" style={{color: props.data.textColor}}>
                        D: {props.data.currentSelectedMix.duration}
                    </div>
                </div>
            </div>
       </div>
   )
}