export default function MixArchive(props){

    const mixes = props.allMixes.map((mix) =>
        <li key={Math.random()}>
            <button onClick={
                () => {
                    props.setMix(mix);
                    // closees mix archive when item selected
                    props.callback(!props.mixArchiveOpen);
                }
                }>{mix.title}</button>
        </li>
    );

    return(
        <div>
            <button onClick={() => props.callback(!props.mixArchiveOpen)}>Mix Archive {props.mixArchiveOpen.toString()}</button>
            {props.mixArchiveOpen ? mixes : null}
        </div>
    )
}