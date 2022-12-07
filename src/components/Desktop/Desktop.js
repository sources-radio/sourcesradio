import MixArchive from "./MixArchive/MixArchive";
import About from "./About/About";
import Transport from "./CurrentlyPlaying/Transport";
import CurrentSelectedMix from "./SelectedMix/CurrentSelectedMix";
import TopTitle from "./TopTitle/TopTitle";
import Tracklist from "./tracklist/Tracklist";
import './DesktopStyles.css'
import ColorToggle from "./Darkmode/ColorToggle";

export default function Desktop(props){
    
    return(
        <div>
            <TopTitle data={props.data}/>
            <CurrentSelectedMix data={props.data}></CurrentSelectedMix>
            <Transport data={props.data}/>
            <About data={props.data}></About>
            <MixArchive data={props.data} />
            <Tracklist data={props.data} />
            <div className="backgroundImage" style={{backgroundColor: props.data.backgroundColor}}></div> {/*style={{backgroundImage: "url(/img/img3.png)"}}*/}
            <ColorToggle data={props.data} />
        </div>
    )
}