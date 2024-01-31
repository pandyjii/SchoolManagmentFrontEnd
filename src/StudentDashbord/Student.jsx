import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Student() {
    const Navigate=useNavigate();

    useEffect(()=>{
        Navigate('/sinups')
    },[])
  return (
    <div>
      
    </div>
  )
}
