import './AboutStyles.css'

export default function About(props){

    var aboutString = (
        <div className='aboutText'>
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
        <div className='aboutContainer'>
            <button className='aboutButton' onClick={OnClick}>ABOUT ↓</button>
            <div>{props.data.aboutOpen ? aboutString : null}</div>
        </div>
    )
}