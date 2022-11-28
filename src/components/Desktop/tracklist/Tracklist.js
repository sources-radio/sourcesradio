import "./TracklistStyles.css"

export default function Tracklist(props){


    // if(!props.data.showTracklistOnDesktop)
        // return;

    var count = props.data.currentPlayingMix.songs.length;
    var halfCount = count / 2;
    halfCount = Math.round(halfCount--);
    var index1 = 0;
    var index2 = 0;

    const tracks1 = props.data.currentSelectedMix.songs.map((song) => {
        if(song.showInTracklist === true)
        {
            if(index1++ < 4)
            {
                return (
                    <div key={Math.random()}>
                        <div className="song" style={{color: props.data.textColor}}>{song.songName}</div>
                        <div className="artist" style={{color: props.data.textColor}}>{song.artist}</div>
                    </div>
                );
            } 
        }
    })

    const tracks2 = props.data.currentSelectedMix.songs.map((song) => {
        if(song.showInTracklist === true)
        {
            if(index2++ > 4)
            {
                return (
                    <div key={Math.random()}>
                        <div className="song" style={{color: props.data.textColor}}>{song.songName}</div>
                        <div className="artist" style={{color: props.data.textColor}}>{song.artist}</div>
                    </div>
                );
            }
        }
    })

    return(
        <div className="main">
            <div className="container1">
                <ul>
                    {tracks1}
                </ul>
            </div>
            
            <div className="container2">
                <ul>
                    {tracks2}
                </ul>
            </div>

        </div>
    )
}