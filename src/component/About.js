import './About.css'
import image1 from './about1.jpg'
import image2 from './about2.jpg'
import image3 from './about3.jpg'
export default function About(){
    return(
        <>
          <div class="about-body">
            <div>
            <p class="about">About Us</p>
          <h2 id="about2">Best Brand Best Quality</h2>
          <p class="about">There are many variations of passages of Lorem Ipsum available, 
             but the <br/>majority have suffered alteration in some form words.</p>
          <p class="about">If you are going to use a passage of Lorem Ipsum, 
             you need to be sure there <br/>isn't anything embarrassing hidden in the middle of text. 
             All the Lorem Ipsum <br/>generators on the Internet tend to repeat predefined chunks as necessary, 
             <br/>making this the first true generator on the Inter net. It uses a dictionary of <br/>over 200 Latin words.</p>
          <h4 id="about3">More About us</h4>
          </div>
          <div>
             <img src={image1} alt="about1" id="img1"/>
             <img src={image2} alt="about2" id="img2"/>
             <img src={image3} alt="about3" id="img3"/>            
          </div>
          </div>
        </>
    )
}