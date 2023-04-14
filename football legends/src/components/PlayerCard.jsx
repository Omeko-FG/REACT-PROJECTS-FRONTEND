import { useState } from "react";
import Card from "react-bootstrap/Card"; 
const PlayerCard =({ name, img,country,position,team })=>{
    const [showImage, setShowImage] = useState(true);
    const handleClick = () => setShowImage(!showImage);
    return(
        <Card  onClick={handleClick}
        className="rounded-2 m-auto player-card"
        role="button">{showImage ? (
            <Card.Img variant="top" src={img} className="player-logo" />
          ) : (  
            <ul className="m-1">
            <li>Country : {country}</li>
            <li>Team : {team}</li>
            <li>Position : {position}</li>
          </ul> 
               
          )} 
          <Card.Footer>
            <Card.Title>{name}</Card.Title>
          </Card.Footer></Card>

    );
 
} 
export default PlayerCard;  