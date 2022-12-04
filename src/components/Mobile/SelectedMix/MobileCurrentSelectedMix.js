import './MobileCurrentSelectedMixStyles.css'
import { ImPause2, ImPlay3 } from 'react-icons/im'

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
               <button className='mobilePlayButton' onClick={setNewMix}>
                        {getPlayPauseButton()}
                    </button> 
                <div className='mobileSelectedMix'>{props.data.currentSelectedMix.title}</div>
                
            </div>
        </div>
    )
}