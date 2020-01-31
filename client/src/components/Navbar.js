import React, {useState, useEffect, useRef} from 'react'
import {NavLink, Link, useHistory} from 'react-router-dom'
import Socials from './Socials'

const NavBar = () => {
    const navLinkStatus = useClass('toggle')
    let history = useHistory()
    let {match} = history;

    const imgSrc = useClass('https://img.icons8.com/officel/40/000000/menu.png')
    const handleToggle = () =>{
        if ( navLinkStatus.value === 'toggle'){
            navLinkStatus.setValue('toggle not')
            imgSrc.setValue('https://img.icons8.com/ultraviolet/40/000000/multiply.png')
        }else{
            navLinkStatus.setValue('toggle')
            imgSrc.setValue('https://img.icons8.com/officel/40/000000/menu.png')
        }
        console.log(navLinkStatus.value)
    }

    return (
        <div className = 'navBar'>
        <img onClick={handleToggle} className= 'hamburger' src={imgSrc.value}/>
            <div className = {navLinkStatus.value}>
                <a onClick = {handleToggle}  className = 'navLink' href= '#Home'>Home</a>
                <a onClick = {handleToggle} className = 'navLink' href= "#photos">Photos</a>
                <a onClick = {handleToggle} className = 'navLink' href= '#videos'>Videos</a>
                <a onClick = {handleToggle} className = 'navLink' href = '#music'>Music</a>
                <Socials></Socials>

            </div>
        </div>
    )
}

const useClass = (initialValue) =>{
    const [value, setValue] = useState(initialValue);
    return {value,setValue}
}

export default NavBar
