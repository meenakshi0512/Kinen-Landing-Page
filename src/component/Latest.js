import './Latest.css'
export default function latest(props){
     return(
        <>
          <div class="latest-main">
             <img src={props.src} alt="bg" class="latest-image"/>
              <div class="latest-text">
               <p id={props.id1}>#womenhat</p>
              <br/>
             <b id={props.id2}>Women`s Faux</b>
             <br/>
             <b id={props.id3}>Leather Band Felt Floppy Hat</b>
             <br/>
              </div>
          </div>
        </>
     ) 
}