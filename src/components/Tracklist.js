export default function Tracklist(props){
    const tracklist = props.currentMix.songs.map((track) => 
    <p key={Math.random()}>{track.songName} - {track.artist}</p>
    );

    return(
        <div>
            {tracklist}
        </div>
    )
}