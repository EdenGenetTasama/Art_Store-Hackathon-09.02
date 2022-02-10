import {useContext} from "react";
import {paintingContext} from "../../../Context/painting-context";
import PaintingCard from "./paintingCard";
import "./printingCard.css";
const PaintingCards  = () => {
    const { paintingsData} = useContext(paintingContext);

    return (
      <div className="DivOfCard">
          {paintingsData.map((itemPainting)=>{
           return <div className="oneCardStyle">
              <PaintingCard item={itemPainting}/>
            </div>
          })}
       
      </div>
    );
  };
  
  export default PaintingCards;