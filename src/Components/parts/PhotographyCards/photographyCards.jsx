import {useContext} from "react";
import {photosgContext} from "../../../Context/photography-context";
import PhotographyCard from "./photographyCard";
import "./photography.css";

const PhotographyCards  = () => {
    const { photosData} = useContext(photosgContext);

    return (
      <div className="DivOfCard">
          {photosData.map((itemPainting)=>{
           return <div className="oneCardStyle">
              <PhotographyCard item={itemPainting}/>
            </div>
          })}
       
      </div>
    );
  };
  
  export default PhotographyCards;