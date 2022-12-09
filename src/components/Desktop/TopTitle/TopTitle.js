import './TopTitleStyles.css'

export default function TopTitle(props)
{
    return(
        <div className='topTitle transitionText' style={{ color: props.data.textColor}}>SOURCES RADIO</div>
    )

}