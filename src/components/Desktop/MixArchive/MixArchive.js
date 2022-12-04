import './MixArchiveStyles.css'

export default function MixArchive(props){

    const mixes = props.data.allMixes.map((mix) =>
        <div key={Math.random()}>
            <button key={Math.random()} className='mixArchives' style={{color: props.data.textColor}} onClick={
                () => {
                    props.data.setCurrentSelectedMix(mix);
                    props.data.setMixArchiveOpen(!props.data.mixArchiveOpen)
                }
                }>{mix.title}{props.data.currentSelectedMix.title === mix.title ? "-" : ""}
            </button>
        </div>
   );

    function OnClick(){
        props.data.setMixArchiveOpen(!props.data.mixArchiveOpen);
        props.data.setAboutOpen(false);
    }

    return(
        <div className="mixArchiveContainer">
            <button className="mixArchiveButton" style={{color: props.data.textColor}} onClick={OnClick}>MIX ARCHIVE {props.data.mixArchiveOpen ? "↓" : "->"}</button>
            {props.data.mixArchiveOpen ? mixes : null}
        </div>
    )
}