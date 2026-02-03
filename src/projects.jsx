import { BorderAll } from "@mui/icons-material";
import SelectActionCard from "./myProj";

function ProjPg (){
 return(
  <div className = "centrePiece"
  style={{ backgroundImage: 'url(/wallpaperA.jpg)' }}>
      <h1 style={{
    border: "2px solid black", // thickness, style, color
    padding: "10px",           // adds some space inside the border
    display: "inline-block",   // makes the border hug the text
    borderRadius: "8px" 
  }}>Projects that I have made:</h1>
      <div id="projects-of-mine">
    <SelectActionCard/>
      </div>

  </div>

 )
}

export default ProjPg;