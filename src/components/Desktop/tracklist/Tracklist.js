import "./TracklistStyles.css"

export default function Tracklist(props){

    var count = props.data.currentPlayingMix.songs.length;
    var halfCount = count / 2;
    halfCount = Math.round(halfCount--);
    var index1 = 0;
    var index2 = 0;

    const truncate = (input) => input.length > 29 ? `${input.substring(0, 29)}...` : input;

    const tracks1 = props.data.currentSelectedMix.songs.map((song) => {
        if(song.showInTracklist === true)
        {
            if(index1++ < 4)
            {
                return (
                    <div key={Math.random()}>
                        <div className="song" style={{color: props.data.textColor}}>{truncate(song.songName.toUpperCase())}</div>
                        <div className="artist" style={{color: props.data.textColor}}>{song.artist.toUpperCase()}</div>
                    </div>
                );
            } 
        }
    })

    const tracks2 = props.data.currentSelectedMix.songs.map((song) => {
        if(song.showInTracklist === true)
        {
            if(index2++ >= 4)
            {
                return (
                    <div key={Math.random()}>
                        <div className="song" style={{color: props.data.textColor}}>{truncate(song.songName.toUpperCase())}</div>
                        <div className="artist" style={{color: props.data.textColor}}>{song.artist.toUpperCase()}</div>
                    </div>
                );
            }
        }
    })

    function tracklist(){
            return(
                <div className={`main ${props.data.isTracklistOpen ? "visible" : "hidden"}`}>
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

    return(
        tracklist()
    )
}