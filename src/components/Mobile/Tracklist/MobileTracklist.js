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

    const truncate = (input) => input.length > 25 ? `${input.substring(0, 25)}...` : input;
    
    const tracks1 = props.data.currentSelectedMix.songs.map((song) => {
        if(song.showInTracklist === true)
        {
            if(index++ < 4)
            {
                return (
                    <div key={Math.random()}>
                        <div className="mobileSong">{truncate(song.songName.toUpperCase())}</div>
                        <div className="mobileArtist">{truncate(song.artist.toUpperCase())}</div>
                    </div>
                );
            }
        } 
    })


    var index2 = 0;
    const tracks2 = props.data.currentSelectedMix.songs.map((song) => {
        if(song.showInTracklist === true)
        {
            if(index2++ >= 4)
            {
                return (
                    <div key={Math.random()}>
                        <div className="mobileSong">{truncate(song.songName.toUpperCase())}</div>
                        <div className="mobileArtist">{truncate(song.artist.toUpperCase())}</div>
                    </div>
                );
            }
        } 
    })


    return (
        <div className='mobileTracklist'>
            <button className='mobileTracklistButton' onClick={OnClick}>TRACKLIST {props.data.isTracklistOpen ? "" : ""}</button>
            <div className='mobileTracklistColumns'>
                <div className='mobileTracklistColumn'>{props.data.isTracklistOpen ? tracks1 : null}</div>
                <div className='mobileTracklistColumn'>{props.data.isTracklistOpen ? tracks2 : null}</div>
            </div>
       </div>
    )
}