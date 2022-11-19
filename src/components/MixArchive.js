export default function MixArchive(props){

    const mixes = props.allMixes.map((mix) =>
        <li key={Math.random()}>
            <button onClick={() => props.setMix(mix)}>{mix.title}</button>
        </li>
    );

    return(
        <div>
            {mixes}
        </div>
    )
}