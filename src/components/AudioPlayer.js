import React, { useEffect, useState } from 'react';
import { useAudioPlayer, AudioPlayerProvider, useAudioPosition  } from 'react-use-audio-player';

const AudioPlayer = ({ file, playState, audioPlay, appState, setPlayState, setCurrentTime }) => {
  const { togglePlayPause, ready, loading, playing, error, play } = useAudioPlayer({
    src: file,
    format: 'mp3',
    autoplay: false,
    html5: true,
    loop: false
  });

  const { percentComplete, duration } = useAudioPosition({ highRefreshRate: true })

  const [time, setTime] = useState(0);

  useEffect(() =>{
    setTime(time+1);
    setCurrentTime((percentComplete * duration * 0.01).toFixed(0));
  },[percentComplete])

  useEffect(() => {
    if(loading && appState !== "startup")
    {
      setCurrentTime("loading")
    }
  },[loading])

  useEffect(() => {
    console.log("app state: " + appState);
    if(appState == "pause")
    {
      console.log("setting pause");
      // pause if playing
      if(playing)
      {
        setPlayState(false);
        togglePlayPause();
        console.log("togglings pause in audiopLayer");
        setPlayState(false);
      }
    }
    else if (appState == "playing")
    {
      console.log("setting playing");
      // play if paused
      if(!playing)
      {
        togglePlayPause();
        setPlayState(true);
      }
    }
    else if(appState == "switching")
    {
      // do nothing for now
    }

  },[appState])

    useEffect(() => {
      // console.log("error: " + error.messag);
      // alert("there was an error loadign the music ... please try again");
      if(error)
      {
        console.log("error: " + error.messag);
        alert("there was an error loadign the music ... please try again");
      }

    }, [error])

  return (
    <AudioPlayerProvider>
    </AudioPlayerProvider>
  );
};

export default AudioPlayer;