import meAndBruce from './images/meAndBruce.jpg';
import bgA from "./backGrounds/wallpaperA.webp"

function HomePg (){
 return(
<div
  className="centrePiece"
  style={{ backgroundImage: `url(${bgA})` }}
>
 <img 
  src = {meAndBruce}
  alt="Me and my Cat"
  style={{
     width: '250px',   
          height: 'auto',   
          borderRadius: '8px',  
          padding: '10px',
          border: '4px solid #000', 
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)', 
          margin: '20px', 
    
  }}
/>
      <h1>
    Welcome To My WebPage
  </h1>
  <p>
    My name is Wilson Sum and I graduated<br />
    out of Seneca College Polytechnic on<br />
    December 2025. I have done 4 months of<br />
    co-op as a Front End Web Developer at<br />
    a company called Meta Trading Club.<br />
    We were developing a personality quiz<br />
    website much like 16personalities.<br />
    Feel free to reach out to me, have<br />
    a nice day.
  </p>
  </div>

 )
}


export default HomePg;