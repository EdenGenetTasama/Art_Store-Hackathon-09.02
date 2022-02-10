import {useContext} from "react";
import DrawingCard from "./drawingCard";
import {drawingContext} from "../../../Context/drawing-context";


const DrawingCards  = () => {
    const { drawingData} = useContext(drawingContext);

    return (
      <div className="DivOfCard">
          {drawingData.map((itemDrawing)=>{
           return <div className="oneCardStyle">
              <DrawingCard item={itemDrawing}/>
            </div>
          })}
       
      </div>
    );
  };
  
  export default DrawingCards;