import './MobileTracklistStyles.css'

export default function MobileTracklist(props){

    function OnClick()
    {
        props.data.setIsTracklistOpen(!props.data.isTracklistOpen);
        props.data.setMixArchiveOpen(false);
        props.data.setAboutOpen(false);
    }

    var index = 0;
    var count = props.data.currentPlayingMix.songs.length;
    var halfCount = count / 2.0;
    
    const tracks1 = props.data.currentSelectedMix.songs.map((song) => {
        
            return (
                <div>
                    <div className="mobileSong">{song.songName}</div>
                    <div className="mobileArtist">{song.artist}</div>
                </div>
            );
    })

    return (
        <div className='mobileTracklist'>
            <button className='mobileTracklistButton' onClick={OnClick}>TRACKLIST ↓</button>
            <div>{props.data.isTracklistOpen ? tracks1 : null}</div>
        </div>
    )
}