import React from 'react'
import './Input.css'
import { Button } from '@mui/material'
import { Input } from '@mui/material'



const Inputer = ({input,setinput,findweather}) => {
  const handleChange = (event) =>{
    setinput(event.target.value)
  }
  const handleClick = (event)=>{
    event.preventDefault()
    findweather()
  }
  return (
    <div className='inputBox'>
        <div className='inputBox__field'>
            <h1>GOOGLE WEATHER APP</h1>
            <p>powered by google</p> 
            <img src='https://madeby.google.com/static/images/google_g_logo.svg' alt='logo'/> 
            <form>
            <Input placeholder="Type your city " onChange={handleChange} value={input}  />
            <br/>
            <Button variant="contained" type="submit" onClick={handleClick}>search</Button>
            </form>

        </div>
    </div>
  )
}

export default Inputer