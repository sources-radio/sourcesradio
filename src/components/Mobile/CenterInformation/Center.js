import MobileTracklist from "../Tracklist/MobileTracklist";
import MobileMixArchive from "../MixArchive/MobileMixArchive";
import MobileCurrentSelectedMix from "../SelectedMix/MobileCurrentSelectedMix";
import './CenterStyles.css'

export default function Center(props){
    return(
        <div className="Center">
            <MobileCurrentSelectedMix data={props.data}></MobileCurrentSelectedMix>
            <MobileTracklist data={props.data} ></MobileTracklist>
            <MobileMixArchive data={props.data} ></MobileMixArchive>
        </div>
    )

}