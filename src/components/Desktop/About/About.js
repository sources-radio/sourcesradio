import './AboutStyles.css'

export default function About(props){

    var aboutString = (
        <div className='aboutText transitionText' style={{color: props.data.textColor}}>
            <p>(C)SRCSRADIO@GMAIL.COM</p>
            <p>(IG)@SOURCESRADIO</p>
            <p>LOS ANGELES, CA</p>
        </div>
    );

    function OnClick()
    {
        props.data.setAboutOpen(!props.data.aboutOpen);
        props.data.setMixArchiveOpen(false);
    }

    return (
        <div className='aboutContainer' style={{color: props.data.textColor}}>
            <button className='aboutButton transitionText' style={{color: props.data.textColor}} onClick={OnClick}>ABOUT {props.data.aboutOpen ? "" : ""}</button>
            <div>{props.data.aboutOpen ? aboutString : null}</div>
        </div>
    )
}