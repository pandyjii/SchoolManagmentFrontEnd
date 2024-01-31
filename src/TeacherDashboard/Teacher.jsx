

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Teacher() {
    const Navigate=useNavigate();

    useEffect(()=>{
        Navigate('/sinupt')
    })
  return (
    <div>
      
    </div>
  )
}
