import { Button} from '@mui/material';

import React from 'react'
import './result.css'

const result = ({ temp, dis, icon ,setTemp}) => {
    return (
        <div className='result'>
            <div className='result_box'>

                <h1>temp:{temp}</h1>
                <p>{dis}</p>
                <img src={icon} /><br/>
                <Button variant="contained" color="success" type='submit'onClick={()=>{setTemp("")}}>
                      back
                    </Button>

              
            </div>


        </div>

    )
}

export default result