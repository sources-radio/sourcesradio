import "./TracklistStyles.css"

export default function Tracklist(props){


    if(!props.data.showTracklistOnDesktop)
        return;

    var count = props.data.currentPlayingMix.songs.length;
    var halfCount = count / 2.0;
    var index1 = 0;
    var index2 = 0;

    const tracks1 = props.data.currentSelectedMix.songs.map((song) => {
        if(index1++ < halfCount)
        {
            return (
                <div key={Math.random()}>
                    <div className="song">{song.songName}</div>
                    <div className="artist">{song.artist}</div>
                </div>
            );
        }
    })

    const tracks2 = props.data.currentSelectedMix.songs.map((song) => {
            if(index2++ > halfCount)
            {
                return (
                    <div key={Math.random()}>
                        <div className="song">{song.songName}</div>
                        <div className="artist">{song.artist}</div>
                    </div>
                );
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