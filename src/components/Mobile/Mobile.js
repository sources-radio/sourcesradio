import Center from "./CenterInformation/Center.js";
import MobileTopTitle from "./TopTitle/MobileTopTitle";
import MobileCurrentPlaying from "./CurrentlyPlaying/MobileCurrentPlaying";
import MobileAbout from "./About/MobileAbout";

export default function Mobile(props){

    return(
        <div>
            <MobileTopTitle></MobileTopTitle>
            <Center data={props.data}></Center>
            <MobileCurrentPlaying data={props.data} ></MobileCurrentPlaying>
            <MobileAbout data={props.data}></MobileAbout>
        </div>
    )
}