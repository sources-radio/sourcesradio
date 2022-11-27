import { useState } from "react"
import { useEffect } from "react";
import ReactHowler from "react-howler";
import { useMediaQuery } from "react-responsive";
import LandingPage from "../LandingPage/LandingPage";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";

let player;

export default function Main(){
    // const isDesktop = useMediaQuery({ query: '(min-width: 1124px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 700px)' })
    const showTracklistOnDesktop = useMediaQuery({ query: '(min-width: 1230px)'})
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)'})

    const mix001 = require('../data/mix_001.json');
    const mix002 = require('../data/mix_002.json');
    const mix003 = require('../data/mix_003.json');
    const [currentPlayingMix, setCurrentPlayingMix] = useState(mix001);
    const [currentSelectedMix, setCurrentSelectedMix] = useState(mix001);
    const [playState, setPlayState] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [mixArchiveOpen, setMixArchiveOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isTracklistOpen, setIsTracklistOpen] = useState(false);

    const mixArray = [mix001, mix002, mix003];
    const [allMixes, setAllMixes] = useState(mixArray);

    var mixNames = mixArray.map((mixes) => '/audio-files/' + mixes.title + ".mp3");

    function pauseToggle(){
        setPlayState(!playState);
    }

    function setMix(mix){
        if(playState)
            pauseToggle();
        setCurrentPlayingMix(mix);
    }

    useEffect(() => {
        // this.setMixArchive = this.setMixArchive.bind(this);

        const interval = setInterval(() => 
        {
            setCurrentTime(player.seek().toFixed(0));
        }, 500);
        return () => {
            clearInterval(interval)
        }
    }, [])

    const site = (desktop) =>{

        var data = {};
        data.currentPlayingMix = currentPlayingMix;
        data.setCurrentPlayingMix = setCurrentPlayingMix;
        data.currentSelectedMix = currentSelectedMix;
        data.setCurrentSelectedMix = setCurrentSelectedMix;
        data.playState = playState;
        data.currentTime = currentTime;
        data.aboutOpen = aboutOpen;
        data.setAboutOpen = setAboutOpen;
        data.mixArchiveOpen = mixArchiveOpen;
        data.setMixArchiveOpen = setMixArchiveOpen;
        data.allMixes = allMixes;
        data.pauseToggle = pauseToggle;
        data.currentTime = currentTime;
        data.isLoading = isLoading;
        data.showTracklistOnDesktop = showTracklistOnDesktop;
        data.isTracklistOpen = isTracklistOpen;
        data.setIsTracklistOpen = setIsTracklistOpen;

        if(desktop === true)
        {
            return(
                <Desktop data={data} />
            )
        }
        else{
            return(
                <Mobile data={data}/>
            )
        }

    }

    function OnPlay(){
        console.log("On Play");
    }

    function OnLoaded(){
        console.log("On Loaded")
    }

    function OnError(mgs){
        console.log("error: " + mgs)
    }

    function OnLoadError(mgs){
        console.log("load error" + mgs)
    }

    return (
        <div>
            {/* <LandingPage ></LandingPage> */}
            {site(isDesktop)}
            
            <ReactHowler 
                playing={playState} 
                html={true} src={'/audio-files/' + currentPlayingMix.title + ".mp3"}
                ref={(ref) => {player = ref;}}
                onPlay={OnPlay}
                onLoad={OnLoaded}
                onLoadError={OnLoadError}
                onError={OnError}
            />
            {/* <h1>SOURCES RADIO</h1>
            <About aboutOpen={aboutOpen} callback={setAboutOpen} />
            <MixArchive mixArchiveOpen={mixArchiveOpen} callback={setMixArchiveOpen} allMixes={allMixes} setMix={setMix}></MixArchive>
            <br></br>
            <button onClick={PauseToggle}>{playState == true ? "PAUSE" : "PLAY"}</button>
            <p>current time: {currentTime}</p>
            <Title title={"mix title: " + currentMix.title}></Title>
            <p>total duration: {currentMix.duration}</p>
            <br></br>
            <Tracklist currentMix={currentMix}></Tracklist>
            <br></br>
            <p>{isDesktop ? "desktop" : "mobile"}</p>
            <p>{isPortrait ? "portrait" : "landscape"}</p> */}
        </div>
    )
}