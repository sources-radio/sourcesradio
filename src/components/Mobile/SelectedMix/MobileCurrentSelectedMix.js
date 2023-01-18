import './MobileCurrentSelectedMixStyles.css'
import { ImPause2, ImPlay3 } from 'react-icons/im'

export default function MobileCurrentSelectedMix(props){

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





        // if(props.data.currentSelectedMix.title === props.data.currentPlayingMix.title)
        // {
        //     props.data.pauseToggle();
        // }
        // else
        // {
        //     props.data.setCurrentPlayingMix(props.data.currentSelectedMix)
            
        //     setTimeout(() => {
        //         if(!props.data.playState)
        //             props.data.pauseToggle();
        //     }, 100);
        // }
    }

    function getPlayPauseButton()
    {
        if(props.data.currentPlayingMix.title === props.data.currentSelectedMix.title)
        {
            return(props.data.playState ? null :  <ImPlay3 size={window.innerWidth/12}/>)
        }
        else
        {
            return(<ImPlay3 size={window.innerWidth/12}/>);
        }
    }

    return(
        <div>
            <div className='mobileSelectedMixContainer'>
               <button className='mobilePlayButton' onClick={handleClick}>
                        {getPlayPauseButton()}
                    </button> 
                <div className='mobileSelectedMix' onClick={handleClick}>{props.data.currentSelectedMix.title}</div>
                
            </div>
        </div>
    )
}