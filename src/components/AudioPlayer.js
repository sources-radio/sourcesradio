import React, { useEffect, useState } from 'react';
import { useAudioPlayer, AudioPlayerProvider, useAudioPosition  } from 'react-use-audio-player';

const AudioPlayer = ({ file, playState, audioPlay, appState }) => {
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

  useEffect(() => {
    // console.log("playStateupdated to: " + playState)

    // if(playState != playing)
      // togglePlayPause();
  },[playState])

  useEffect(() => {
    if(appState == "pause")
    {
      console.log("setting pause");
      // pause if playing
      if(playState != playing)
        togglePlayPause();
    }
    else if (appState == "playing")
    {
      console.log("setting playing");
      // play if paused
      if(playState != playing)
        togglePlayPause();
    }
    else if(appState == "switching")
    {
      // do nothing for now
    }

  },[appState])
  // useEffect(()=>{
    // if(!playing)
      // play();
  // },[audioPlay])


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