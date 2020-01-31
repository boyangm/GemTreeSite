import React, { useRef, useState , useEffect, useContext } from 'react'
import { photoData } from './photoData'
import {WebState} from './webState'
const PhotoPage = () => {
    const context = useContext(WebState)
    const {handleScroll} = context;
    let direction = ""
    let oldx = 0
    const [css, setCss] = useState('toggle not')
    const [photoCss, setPhotoCss] = useState('photo not')
    const [source, setSource] = useState('')
    const photoRef = useRef('')

    const handleRef = (e) => {
        photoRef.current = e.target
        if (e.pageX < oldx) {
            direction = "right"
            photoRef.current.className = `galleryItem ${direction}`
        } else if (e.pageX > oldx) {
            direction = "left"
            photoRef.current.className = `galleryItem ${direction}`
        }
        oldx = e.pageX;

    }
    const handleLeave = (e) => {
        photoRef.current = e.target
        photoRef.current.className = 'galleryItem'
    }
    const toggleModal = (photo) => {
        console.log(photo)
        if (css === 'toggle') {
            setSource(photo)
            setCss('toggle not')
        } else {
            setSource(photo)
            setCss('toggle')

        }
    }
    return (
        <div id='photos' className='photoCont'>
        <h3 className= 'subTitle'>Photos</h3>
            <div onClick={() => toggleModal('')} className={css}>
                <img className={photoCss} src={source}  alt = ""/>
            </div>

            <div className='photoPage'>
                {photoData.map(photo => (
                    <img onClick={() => toggleModal(photo)} onMouseEnter={e => handleRef(e)} onMouseLeave={e => handleLeave(e)} key ={photoData.indexOf(photo)} ref={photoRef} className='galleryItem' src={photo} alt = "" />
                ))}
            </div>
        </div>
    )
}

export default PhotoPage
