import { BorderAll } from "@mui/icons-material";
import SelectActionCard from "./myProj";

function ProjPg (){
 return(
  <div className = "centrePiece"
  style={{ backgroundImage: 'url(/wallpaperA.jpg)' }}>
      <h1 style={{
    border: "2px solid black", 
    padding: "10px",           
    display: "inline-block",  
    borderRadius: "8px",
    fontFamily: "monospace" 
  }}>Projects that I have made:</h1>
      <div id="projects-of-mine">
    <SelectActionCard/>
      </div>

  </div>

 )
}

export default ProjPg;