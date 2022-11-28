import MixArchive from "./MixArchive/MixArchive";
import About from "./About/About";
import Transport from "./CurrentlyPlaying/Transport";
import CurrentSelectedMix from "./SelectedMix/CurrentSelectedMix";
import TopTitle from "./TopTitle/TopTitle";
import Tracklist from "./tracklist/Tracklist";
import './DesktopStyles.css'

export default function Desktop(props){
    
    return(
        // <div className="backgroundImage" style={{backgroundImage: "url(/img/img1.png)"}}>
        <div className="backgroundImage">
            <TopTitle/>
            <CurrentSelectedMix data={props.data}></CurrentSelectedMix>
            <Transport data={props.data}/>
            <About data={props.data}></About>
            <MixArchive data={props.data} />
            <Tracklist data={props.data} />
            {/* {// this is how all the data is being passed down} */}
            {/* <button onClick={() => props.data.setCurrentMix(props.data.allMixes[1])}></button> */}
        </div>
    )
}