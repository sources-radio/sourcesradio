import './MobileAboutStyles.css'

export default function MobileAbout(props){

    var aboutString = (
        <div className='mobileAboutText'>
            <p>(C)</p>
            <p>SRCSRADIO</p>
            <br></br>
            <p>(IG)</p>
            <p>@ SOURCESRADIO</p>
            <br></br>
            <p>LOS ANGELES</p>
            <p>CALIFORNIA</p>
        </div>
    );

    function OnClick(){
        props.data.setAboutOpen(!props.data.aboutOpen);
        props.data.setMixArchiveOpen(false);
        props.data.setIsTracklistOpen(false);
    }
    
    return (
        <div className="mobileAbout">
            <button className="mobileAboutButton" onClick={OnClick}>ABOUT ↓</button>
            {props.data.aboutOpen ? aboutString : ""}
        </div>
    )
}