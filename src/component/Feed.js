import './Feed.css'
export default function Feed(){
    return (
      <>
        <div class="feed-body alignment">
          <div><img src={require("./assets/testimonial.jpg")} alt="img"/></div>
          <div>
            <div class="item-heading">
              <h3 class="new-arrival">FEEDBACK</h3>
              <h3 class="season">REVIEW</h3>
            </div>
              <h6 id="feedname">Wanneta Gagner</h6>
              <b id="feedtype">Customer</b>
              <p id="feedcaption">“ There are many variations of passages of available the majority have <br/>
              suffered alteration in some form, by injected humour, or randomised words<br/> 
              slightly believable there isn't anything. ”</p>
          </div>
        </div>
      </>
    );
}