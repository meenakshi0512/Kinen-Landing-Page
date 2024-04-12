import './Row1.css'
export default function Row1(props){
   return(
    <>
      <div>
      <div class="item-container" id={props.id}>
        <h3 class="item-caption">{props.text}</h3>
      </div>
      <div class="item-price">
        <b>{props.price}</b>
      </div>
      </div>
    </>
   )
}