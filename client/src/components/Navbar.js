import React, {useState, useEffect, useImperativeHandle} from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    const navLinkStatus = useClass('toggle')
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
                <NavLink  className = 'navLink' to = '/home'>Home</NavLink>
                <NavLink className = 'navLink' to = '/videos'>videos</NavLink>
                <NavLink className = 'navLink' to = '/About'>About</NavLink>

            </div>
        </div>
    )
}

const useClass = (initialValue) =>{
    const [value, setValue] = useState(initialValue);
    return {value,setValue}
}

export default NavBar
