import image from './men1.png'
import dress1 from './dress1.jpg'
import dress2 from './dress2.jpg'
import dress3 from './dress3.jpg'
import './Content1.css'
export default function Content1(){
  
    return(
        <>
          <img id="men1" src={image} alt="men1"/>
          <div class="content-circle">
            <b class="banner-price">$764.26</b>
            <b class="banner-about1">
              JOE Joseph Abboud Brown
            </b>
            <br/>
            <b class="banner-about2">Smart Blazer Set</b>
            <div>
            <div class="banner-text1">Expression Of Individuals</div>
               <div class="banner-text2">
                 <b>Fashion Is Nothing</b>
                 <br/> 
                 <b>But Choice</b>
               </div>
               <div>
                 <div class="banner-shop"><b id="banner-shop-name">Shop</b></div>
               </div>
            </div>
            <div class="dress-main">
               <div class="dress-detail">
                   <img src={dress1} alt='dress1' class="dress-detail-image"/>
                   <b>Long Blazer</b>
                   <br/>
                   <b>$150.38</b>
               </div>
               <div class="dress-detail">
                   <img src={dress2} alt='dress2' class="dress-detail-image"/>
                   <b>White Pant</b>
                   <br/>
                   <b>$80.38</b>
               </div>
               <div class="dress-detail">
                   <img src={dress3} alt='dress3' class="dress-detail-image"/>
                   <b>Leather shoes</b>
                   <br/>
                   <b>$175.38</b>
               </div>
            </div>  
          </div> 
        </>
    )
}