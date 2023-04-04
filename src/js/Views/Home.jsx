import React, { useEffect, useState } from 'react'

 const Home =()=>{
     const [time,setTime] = useState(0)
    //  const [off,setOff] = useState (true)

     useEffect(()=>{
        const interval = setInterval(()=>{
            setTime((prev)=>prev+1);
        }, 1000)
        return ()=> clearInterval(interval)
     },[time])

      const Six = `${Math.floor(time/100000)%10}`
      const Five = `${Math.floor(time/10000)%10}`
      const Four = `${Math.floor(time/1000)%10}`
      const Three = `${Math.floor(time/100)%10}`
      const Two = `${Math.floor(time/10)%10}`
      const One = `${Math.floor(time)%10}`


     return (
        <>
        <div className='clock'>
        <div><i className="far fa-clock"></i></div>
        <div className='six'>{Six}</div>
        <div className='five'>{Five}</div>
        <div className='four'>{Four}</div>
        <div className='three'>{Three}</div>
        <div className='two'>{Two}</div>
        <div className='one'>{One}</div>
        </div>
       
       
       
       
        {/* <button onClick={()=> setTime(new Date())}>YASTAA</button>
        <button onClick={()=>setOff((prev)=>!prev)}
        className={off ? "bg-dark text-white":"bg-white text-dark"}>{off ? "Encendido": "Apagado"}</button> */}
        </>
     )
 }


 export default Home
