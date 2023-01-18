import { useState } from "react"
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import LandingPage from "../LandingPage/LandingPage";
import AudioPlayer from "./AudioPlayer";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";
import { AudioPlayerProvider } from "react-use-audio-player";


let player;

const mix001 = require('../data/mix_001.json');
const mix002 = require('../data/mix_002.json');

const color = 
{
    white: "#F1F1F1",
    black: "#242424"
}

export default function Main(){
    const isDesktop = useMediaQuery({ query: '(min-width: 700px)' })
    const showTracklistOnDesktop = useMediaQuery({ query: '(min-width: 1230px)'})
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)'})

    const [currentPlayingMix, setCurrentPlayingMix] = useState(mix002);
    const [currentSelectedMix, setCurrentSelectedMix] = useState(mix002);
    const [playState, setPlayState] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [mixArchiveOpen, setMixArchiveOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isTracklistOpen, setIsTracklistOpen] = useState(false);

    const mixArray = [mix002, mix001];
    const [allMixes, setAllMixes] = useState(mixArray);
    const [currentSong, setCurrentSong] = useState({artist: " ", song:" "})
    const [textColor, setTextColor] = useState(color.black);
    const [backgroundColor, setBackgroundColor] = useState(color.white)

    const [appState, setAppState] = useState("startup");
    
    function pauseToggle(){
        console.log(`set play state ${!playState}`)
        setPlayState(!playState);
    }

    function processCurrentSong(){
        var songData = {artist: " ", song:" "};

        for (var i = 0; i < currentPlayingMix.songs.length; i++){
            let time = currentPlayingMix.songs[i].time;

            if(time < currentTime)
            {
                songData.artist = currentPlayingMix.songs[i].artist;
                songData.song = currentPlayingMix.songs[i].songName;
            }
        }

        setCurrentSong(songData);
    }

    useEffect(() => {
        const interval = setInterval(() => 
        {
            timerUpdate()
            // setCurrentTime(player.seek().toFixed(0));
        }, 500);
        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(()=>{
        processCurrentSong();
    }, [currentTime])

    useEffect(() =>{
         
    },[])

    var OnEnd = () => {
        console.log("on end");
            this.player.stop();
    }

    function toggleColor()
    {
        if(textColor == color.white)
        {
            setTextColor(color.black)
            setBackgroundColor(color.white)
        }
        else{
            setTextColor(color.white)
            setBackgroundColor(color.black)
        }
    }
    
    function timerUpdate(){
    }

    const site = (desktop) =>{

        var data = {};

        data.appState = appState;
        data.setAppState = setAppState;
        data.currentPlayingMix = currentPlayingMix;
        data.setCurrentPlayingMix = setCurrentPlayingMix;
        data.currentSelectedMix = currentSelectedMix;
        data.setCurrentSelectedMix = setCurrentSelectedMix;
        data.playState = playState;
        data.setPlayState = setPlayState;
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
        data.currentSong = currentSong;
        data.textColor = textColor;
        data.backgroundColor = backgroundColor;
        data.toggleColor = toggleColor;
        data.Play = Play;

        // setAppData(data);

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

    const  Play = () => {

        console.log("On Play");
    }

    function OnLoaded(){
        console.log("On Loaded")
    }

    function OnError(mgs){
        console.log(`error:  ${mgs}`)
    }

    function OnLoadError(mgs){
        console.log(`load errpr: ${mgs} \n at path /audio-files/%{currentPlayingMix.title.toLowerCase()}.mp3`);
    }

    return (
            <AudioPlayerProvider>
                <LandingPage />
                {site(isDesktop)}
                <AudioPlayer file={`/audio-files/${currentPlayingMix.title.toLowerCase()}.mp3`} playState={playState} audioPlay={Play} appState={appState} setPlayState={setPlayState} setCurrentTime={setCurrentTime}/>
            </AudioPlayerProvider>
    )
}