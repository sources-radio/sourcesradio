import './MobileAboutStyles.css'

export default function MobileAbout(props){

    var aboutString = (
        <div className='mobileAboutText'>
            <p>(C)SRCSRADIO</p>
            <p>(IG)@ SOURCESRADIO</p>
            <p>LOS ANGELES, CA</p>
        </div>
    );

    function OnClick(){
        props.data.setAboutOpen(!props.data.aboutOpen);
        props.data.setMixArchiveOpen(false);
        props.data.setIsTracklistOpen(false);
    }
    
    return (
        <div className="mobileAbout">
            <button className="mobileAboutButton" onClick={OnClick}>SRCS©</button>
            {props.data.aboutOpen ? aboutString : ""}
        </div>
    )
}