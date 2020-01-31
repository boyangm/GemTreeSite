import React, {useState} from 'react'
import Socials from './Socials'

const Footer = () => {
    const name = useInput('')
    const email = useInput('')
    const [errMessage, setErrMessage] = useState('')
    const handleSubmit = e =>{
        e.preventDefault()
        const body = {
            name: name.value,
            email: email.value
        }
    }

    return (
        <div className = 'footer'>
            <h4 className = 'subTitle2'>Subscribe</h4>
            <div className='mailList'>
                <label>Name</label>
                <input {...name} type='text'></input>
                <label>Email</label>
                <input {...email} type='email'></input>
                <button onClick ={(e) =>handleSubmit(e)}> Submit</button>
            </div>
            <div className = 'mailList'>
                <label>Management: </label>
                <a href = 'mailto: billy@rosebudallday.com '>billy@rosebudallday.com </a>
                <br></br>
                <label>Booking: </label>
                <a href = 'mailto: gemtreemgmt@gmail.com'>gemtreemgmt@gmail.com </a>
            </div>
            <p>© 2020 Gem Tree. All Rights Reserved</p>
            <Socials></Socials>
        </div>
    )
}

export default Footer

const useInput = (initialValue) =>{
    const [value, setValue] = useState(initialValue)

   const handleValueChange = (e) =>{
       setValue(e.target.value)
   }
     return {
        value,
        onChange : handleValueChange
    }

}
