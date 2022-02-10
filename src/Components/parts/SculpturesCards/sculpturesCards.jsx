import {useContext} from "react";
import {sculpturesContext} from "../../../Context/sculptures-context";
import SculptureCard from "./sculpturesCard";
import "./sculptures.css";

const SculptureCards  = () => {
    const { sculpturesData} = useContext(sculpturesContext);

    return (
      <div className="DivOfCard">
          {sculpturesData.map((itemSculpture)=>{
           return <div className="oneCardStyle">
              <SculptureCard item={itemSculpture}/>
            </div>
          })}
       
      </div>
    );
  };
  
  export default SculptureCards;