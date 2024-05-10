import Navbar from './component/Navbar.js'
import Poster from './component/Poster.js'
import Latest from './component/Latest.js'
import Row1 from './component/Row1.js'
import About from './component/About.js'
import Feedback from './component/Feed.js'
import Journal from './component/Journal.js'
import Footertop from './component/Footertop.js'
import './component/Poster.css'
import './App.css'
function App(){
    return (
     <>
       <Navbar />
       <Poster/>
       <div class="main-div">
      <div id="partner-logo">
          <img src={require("./assets-new/partner-logo.PNG")} alt="partner"/>
      </div>
       <div class="latest-body">
            <Latest src={require("./assets-new/feature1.jpg")} id1="line1" id2="line2" id3="line3"/>
            <Latest src={require("./assets-new/featured2.jpg")} id1="line11" id2="line22" id3="line33"/>
       </div>
       <div class="container">
         <div  id="latest-second-body">
            <img src={require("./assets-new/cta-1.jpg")} alt='cta'/>
         </div>
        <div>
          <h3 class="summer">All New #Summer Collection<br/>Is Available Here</h3>
        </div>
      </div>
      <div class="item-heading alignment">
         <h3 class="new-arrival">NEW ARRIVAL</h3>
         <h3 class='season'>THIS SEASON3</h3>
      </div>
      <div>
        <div class="items alignment">
           <Row1 id="item1" text="Woven Throw Pillow" price="$21.4"/> 
           <Row1 id="item2" text="Copley Dinning Chairs" price="$28.5"/> 
           <Row1 id="item3" text="Women Flexible Shoes" price="$29.4"/> 
        </div>
        <div class="items alignment">
        <Row1 id="item4" text="Women Straps Sandal" price="$19"/> 
        <Row1 id="item5" text="Cat Eye Reading Glass" price="$21"/> 
        <Row1 id="item6" text="Army Basball cap" price="$25.4"/> 
        </div>
      </div>
      <div class="alignment feature">
         <img src={require("./assets-new/usefeature.PNG")} alt="feautre"></img>
      </div>
      <About/>
      <Feedback/>
      <div class="item-heading alignment">
         <h3 class="new-arrival">JOURNAL</h3>
         <h3 class='season'>MAGAZINE</h3>
      </div>
      <div class="alignment items">
        <Journal src={require("./assets-new/img1.jpg")} theme="#Fashion" heading="Spice up your outfits with" heading1="state get a necklace."/>
        <Journal src={require("./assets-new/img2.jpg")} theme="#Technology" heading="These variation sneakers" heading1="will make you heels."/>
      </div>
      <Footertop/>
      </div>
</>
  );
}
export default App;
