import MobileAbout from "./About/MobileAbout";
import MobileCurrentPlaying from "./CurrentlyPlaying/MobileCurrentPlaying";
import MobileMixArchive from "./MixArchive/MobileMixArchive";
import MobileCurrentSelectedMix from "./SelectedMix/MobileCurrentSelectedMix";
import MobileTopTitle from "./TopTitle/MobileTopTitle";
import MobileTracklist from "./Tracklist/MobileTracklist";

export default function Mobile(props){

    return(
        <div>
            <MobileTopTitle></MobileTopTitle>
            <MobileCurrentSelectedMix data={props.data}></MobileCurrentSelectedMix>
            <MobileCurrentPlaying data={props.data} ></MobileCurrentPlaying>
            <MobileTracklist data={props.data} ></MobileTracklist>
            <MobileMixArchive data={props.data} ></MobileMixArchive>
            <MobileAbout data={props.data}></MobileAbout>
        </div>
    )
}