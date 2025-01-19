import React from 'react'
import { useNavigate } from 'react-router-dom'

 import { useState, useEffect } from 'react'

 
 export default function Home() {
   const [mounted, setMounted] = useState(false)
   const navigate=useNavigate()
   useEffect(() => {
     navigate("/problems")
   }, [])
 
   if (!mounted) {
     return null
   }
 
   return (
    <div className='bg-gray-900'></div>
   
   )
 }
 