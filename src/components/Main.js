import { useState } from "react"
import { useEffect } from "react";
import MixArchive from "./MixArchive";
import Title from "./Title";
import Tracklist from "./Tracklist";
import ReactHowler from "react-howler";
import { useMediaQuery } from "react-responsive";
import About from './About'

let player;

export default function Main(){
    const isDesktop = useMediaQuery({ query: '(min-width: 1124px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    
    const mix001 = require('../data/mix_001.json');
    const mix002 = require('../data/mix_002.json');
    const mix003 = require('../data/mix_003.json');
    const [currentMix, setCurrentMix] = useState(mix001);
    const [playState, setPlayState] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [mixArchiveOpen, setMixArchiveOpen] = useState(false);

    const mixArray = [mix001, mix002, mix003];
    const [allMixes, setAllMixes] = useState(mixArray);

    var mixNames = mixArray.map((mixes) => '/audio-files/' + mixes.title + ".mp3");

    function PauseToggle(){
        setPlayState(!playState);
    }

    function setMix(mix){
        if(playState)
            PauseToggle();
        setCurrentMix(mix);
    }

    useEffect(() => {
        // this.setMixArchive = this.setMixArchive.bind(this);

        const interval = setInterval(() => setCurrentTime(player.seek().toFixed(0)), 500);
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <ReactHowler 
                playing={playState} 
                html={true} src={'/audio-files/' + currentMix.title + ".mp3"} 
                ref={(ref) => {player = ref;}}
            />
            <h1>SOURCES RADIO</h1>
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
            <p>{isPortrait ? "portrait" : "landscape"}</p>
        </div>
    )
}