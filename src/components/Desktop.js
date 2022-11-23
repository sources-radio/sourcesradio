import MixArchive from "./MixArchive";

export default function Desktop(props){
    return(
        <div>

            {/* {// this is how all the data is being passed down} */}
            {props.data.currentMix.title}
            <button onClick={() => props.data.setCurrentMix(props.data.allMixes[1])}></button>
        </div>
    )
}