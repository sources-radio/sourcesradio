import './TopTitleStyles.css'

export default function TopTitle(props)
{
    return(
        <div className='topTitle' style={{ color: props.data.textColor}}>SOURCES RADIO</div>
    )

}