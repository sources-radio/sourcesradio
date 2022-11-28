import './MobileCurrentSelectedMixStyles.css'

export default function MobileCurrentSelectedMix(props){

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
        <div>
            <div className='mobileSelectedMixContainer'>
                <img className='mobileSelectedMix' src={'./mixTitles/' + props.data.currentSelectedMix.title + ".png"} />
                <div className="mobileBottomRow">
                    <button className='mobilePlayButton' onClick={setNewMix}>
                        {getPlayPauseButton()}
                    </button>
                    <div className='mobileDuration'>
                        D: {props.data.currentSelectedMix.duration}
                    </div>
                </div>
            </div>
        </div>
    )
}