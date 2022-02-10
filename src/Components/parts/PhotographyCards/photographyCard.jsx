import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./photography.css";

const PhotographyCard=({item})=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="210"
        image={item.Image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5"  component="div">
        <span className="NameSpan">{item.Name}</span>
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        <span className="PriceSpan">Price:</span> {item.Price} $
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add</Button>
        <Button size="small">Detail</Button>
      </CardActions>
    </Card>

  );
}

export default PhotographyCard;