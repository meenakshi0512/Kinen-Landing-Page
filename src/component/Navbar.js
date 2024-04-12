import './Navbar.css'
import logo from './logo.png'
export default function Navbar(){
    return(
        <>
        <div class="main">
          <div class="div1 main">
             <div class="div2"><i class="fa-solid fa-bars div2"></i></div>
             <div class="div2"><i class="fa-solid fa-magnifying-glass div2"></i></div>
          </div>
          <div id="text">
             <img src={logo} alt="kinen"/>
          </div>
          <div class="div1 main">  
               <div class="div2"><i class="fa-regular fa-heart"></i></div>
               <div class="div2"><i class="fa-solid fa-arrow-right-to-bracket"></i></div>
         </div>
       </div>
       </>
    )
}  