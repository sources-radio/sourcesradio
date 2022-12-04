import './MobileMixArchiveStyles.css';

export default function MobileMixArchive(props)
{
    const mixes = props.data.allMixes.map((mix) =>
        <div key={Math.random()}>
            <button key={Math.random()} className='mobileMixArchives' onClick={
                () => {
                    props.data.setCurrentSelectedMix(mix);
                    props.data.setMixArchiveOpen(!props.data.mixArchiveOpen)
                }
                }>{props.data.currentSelectedMix.title === mix.title ? "-" : ""}{mix.title}
            </button>
        </div>
   );

    function OnClick(){
        props.data.setMixArchiveOpen(!props.data.mixArchiveOpen);
        props.data.setAboutOpen(false);
        props.data.setIsTracklistOpen(false);
    }

    return(
        <div className="mobileMixArchiveContainer">
            <button className="mobileMixArchiveButton" onClick={OnClick}>ARCHIVE {props.data.mixArchiveOpen ? "↓" : "->"}</button>
            {props.data.mixArchiveOpen ? mixes : null}
        </div>
    )
}