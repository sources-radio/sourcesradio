export default function About(props){

    var aboutString = (
        <div>
            <p>(C)</p>
            <p>SRCSRADIO[at]GMAIL.COM</p>
            <p>(IG)</p>
            <p>[at]SOURCESRADIO</p>
            <p>LOS ANGELES</p>
            <p>CALIFORNIA</p>
        </div>
    );

    return (
        <div>
            <button onClick={() => props.callback(!props.aboutOpen)}>ABOUT</button>
            <div>{props.aboutOpen ? aboutString : null}</div>
        </div>
    )
}