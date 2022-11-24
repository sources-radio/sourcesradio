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
            <button onClick={() => props.data.setAboutOpen(!props.data.aboutOpen)}>ABOUT</button>
            <div>{props.data.aboutOpen ? aboutString : null}</div>
        </div>
    )
}