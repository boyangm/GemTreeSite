import React, {useState} from 'react'

const MusicPage = () => {

    const [music, setMusic] = useState("https://open.spotify.com/embed/artist/5OCoIoEcLe9wp5uiRHSR83")
    const DSP = (title)=>{

        switch (title){

            case "apple":
            setMusic('https://embed.music.apple.com/us/album/let-me-live/1460685126?i=1460685127&app=music')
            break;
            case "spotify":
            setMusic("https://open.spotify.com/embed/artist/5OCoIoEcLe9wp5uiRHSR83")
            break;
            case "soundCloud":
            setMusic("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/26074327&color=%23b8a5b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true")
            break;
            default:
            setMusic("https://open.spotify.com/embed/artist/5OCoIoEcLe9wp5uiRHSR83")
            break;
        }
    }
    return (
        <div className = 'musicPage'>
        <div id= "music" className = "widgetArea" >
        <h3 className= 'subTitle'>Music</h3>
        <div className = 'musicLogo'>
        <img onClick = {() => DSP("apple")} className ='logo' src="https://img.icons8.com/nolan/64/mac-os.png" alt = 'apple logo'/>
        <img onClick = {() => DSP("soundCloud")} className ='logo' src="https://img.icons8.com/nolan/64/soundcloud.png" alt = 'soundcloud logo'/>
        <img onClick = {() => DSP("spotify")} className ='logo' src="https://img.icons8.com/nolan/64/spotify.png" alt = 'spotify logo'/>
        </div>
    <iframe onClick = {() => DSP()} className='mediaPlayer' src={music} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        </div>
        </div>
    )
}

export default MusicPage


