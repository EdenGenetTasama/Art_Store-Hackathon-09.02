import * as React from "react";
import {useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./photography.css";
import PaintingPopUp from "../PopUp/PaintingPopUP";

const PhotographyCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    {isOpen && <PaintingPopUp
      content={
        <article className='PopUpCard' >
        <img src={item.Image}/>
        <div>
        <h1>{item.Name}</h1>
     
        <h1>{item.Creator}</h1>
        <p>{item.Description}</p>
       
        </div>
      </article>}
      handleClose={togglePopup}
    />}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="300"
          image={item.Image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span className="NameSpan">{item.Name}</span>
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <span className="PriceSpan">Price:</span> {item.Price} $
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add</Button>
          <Button size="small"  onClick={togglePopup}>Detail</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PhotographyCard;
