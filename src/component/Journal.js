import './Journal.css'
export default function Journal(props){
    return(
        <>
         <div class="journal-body">
            <img src={props.src} alt="img" id="journal-image"/>
            <div class="journal-content">
                <p id="journal-theme">{props.theme}</p>
                <h1 id="journal-heading">{props.heading}<br/>{props.heading1}</h1>
                <p id="journal-time">2018/09/15 . By Andreow</p>
                <p id="journal-caption">There are many variations of pass
                    <br/>ages of Lorem Ipsum available,but
                    <br/>the majority have suffered alterat
                    <br/>ion in some form injected.</p>
                <p id="journal-link">Continue Reading...</p>
            </div>
         </div>
        </>
    )
}