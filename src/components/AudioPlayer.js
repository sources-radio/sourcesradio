import React, { useEffect, useState } from 'react';
import { useAudioPlayer, AudioPlayerProvider, useAudioPosition  } from 'react-use-audio-player';

const AudioPlayer = ({ file, playState, audioPlay, appState, setPlayState }) => {
  const { togglePlayPause, ready, loading, playing, error, play } = useAudioPlayer({
    src: file,
    format: 'mp3',
    autoplay: false,
    html5: true,
  });

  const { percentComplete, duration } = useAudioPosition({ highRefreshRate: true })

  const [time, setTime] = useState(0);

  useEffect(() =>{
    setTime(time+1);
  },[percentComplete])


    // if(playState != playing)
      // togglePlayPause();
  // },[playState])

  useEffect(() => {
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

//   if(error) return <div>{error.message}</div>
  if (!ready && !loading) return <div>No audio to play</div>;
//   if (loading) return <div>Loading audio</div>;

//   const goToPosition = React.useCallback((percentage) => {
//         seek(duration * percentage)
//     }, [duration, seek])


  return (
    <AudioPlayerProvider>
      <div>
        <button onClick={togglePlayPause}>{playing ? 'Pause' : 'Play'}</button>
        completed{percentComplete} 
      </div>
    </AudioPlayerProvider>
  );
};

export default AudioPlayer;