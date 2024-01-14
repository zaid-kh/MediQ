import * as React from 'react';
import PsychologyIcon from '@mui/icons-material/Psychology';
import './Card.css'
export default function SpecialtyCard({icon , color, backgroundColor ,specialtyName}) {
  return (
    <div className='SpecialtyCard'>
        <div  style={{ backgroundColor:backgroundColor }}>
             <PsychologyIcon sx= {{fontSize: "32px" , color: color}}/>
        </div>

        <div>
            <h4 className='SpecialtyName'>
               {specialtyName}
            </h4>
        </div>
    
    </div>
  )
}
