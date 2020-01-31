import React, {useEffect, useRef} from 'react'

const Video = () => {
    const videoRef = useRef('')
    const check = window.matchMedia('(min-width: 768px)')

    const handleScroll = () =>{
        const point = videoRef.current.getBoundingClientRect().top
        if(point <= 100 &&  point >= -650 && check.matches){
            videoRef.current.play()
        }else{
            videoRef.current.pause()
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    },[])
    return (
        <div className = 'videoPage'>
        <video ref={videoRef} id='videos' className='screen' src ={'https://gemtreemedia.s3.us-east-2.amazonaws.com/GEM+TREE+FINAL+REVISION.mp4'} muted = 'true' controls ></video>
        </div>
    )
}

export default Video
