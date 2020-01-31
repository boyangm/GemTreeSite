import React, {useState} from 'react'


export const WebState  = React.createContext()

export const Provider = (props) =>{
    const [ navLink, setNavLink] = useState('toggle')
    const [navBarClass , setNavBarClass] = useState('navBar')

    const handleScroll = (elem) =>{
        const point = elem.getBoundingClientRect().top
         if(point <= 0  ){
           setNavBarClass('navBar active')
         }else{
             setNavBarClass('navBar active')
         }
     }

    return(
        <WebState.Provider value = {{navBarClass, handleScroll , navLink, setNavLink}}>
        {props.children}
        </WebState.Provider>
    )
}