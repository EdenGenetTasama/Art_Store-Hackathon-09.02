import { useContext } from "react";
import { paintingContext } from "../../../Context/painting-context";
import "./PopUp.css";

function PaintingPopUp(props){
return(
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );

}
export default PaintingPopUp