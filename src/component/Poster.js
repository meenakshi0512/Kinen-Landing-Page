import {useState,useEffect} from 'react'
import './Poster.css'
import Content1 from './Content1.js'
import Content2 from './Content2.js'
export default function Poster(){
  const [i,setI]=useState(1)
  useEffect(()=>{
    let timer=setInterval(()=>{
      if(i===1)
         setI(i=>i+1)
      else 
         setI(i=>i-1)
    },5000)
    return ()=> clearInterval(timer)
  },[i])
  return(
        <>
        <div class="main-banner">
        { (i===1) ? <Content1/> : <Content2/>}
        </div>
      </>
    );
}