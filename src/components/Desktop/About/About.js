import './AboutStyles.css'

export default function About(props){

    var aboutString = (
        <div className='aboutText' style={{color: props.data.textColor}}>
            <p>(C)</p>
            <p>SRCSRADIO</p>
            <p>SRCSRADIO[at]GMAIL.COM</p>
            <p>(IG)</p>
            <p>[at]SOURCESRADIO</p>
            <p>LOS ANGELES</p>
            <p>CALIFORNIA</p>
        </div>
    );

    function OnClick()
    {
        props.data.setAboutOpen(!props.data.aboutOpen);
        props.data.setMixArchiveOpen(false);
    }

    return (
        <div className='aboutContainer' style={{color: props.data.textColor}}>
            <button className='aboutButton' style={{color: props.data.textColor}} onClick={OnClick}>ABOUT {props.data.aboutOpen ? "↓" : "->"}</button>
            <div>{props.data.aboutOpen ? aboutString : null}</div>
        </div>
    )
}