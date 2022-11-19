import { useState } from "react"
import { useEffect } from "react";
import MixArchive from "./MixArchive";
import Title from "./Title";
import Tracklist from "./Tracklist";
import ReactHowler from "react-howler";

export default function Main(){


    const mix001 = require('../data/mix_001.json');
    const mix002 = require('../data/mix_002.json');
    const mix003 = require('../data/mix_003.json');
    const [currentMix, setCurrentMix] = useState(mix001);
    const [playState, setPlayState] = useState(false);

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

    return (
        <div>
            <h1>SOURCES RADIO</h1>
            <Title title={currentMix.title}></Title>
            <button onClick={PauseToggle}>{playState == true ? "PAUSE" : "PLAY"}</button>
            <p>{currentMix.duration}</p>
            <Tracklist currentMix={currentMix}></Tracklist>
            <MixArchive allMixes={allMixes} setMix={setMix}></MixArchive>
            <ReactHowler playing={playState} src={'/audio-files/' + currentMix.title + ".mp3"}></ReactHowler>
        </div>
    )
}