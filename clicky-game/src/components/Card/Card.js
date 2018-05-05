import React from "react";
import "./Card.css";

const Card = props => (
    <span onClick={() => props.checkClicked(props.id)}>
    <div className="card">
        <div className="character">
            <img className="character-image" alt={props.name} src={process.env.PUBLIC_URL + props.image} />
        </div>
    </div>
    </span>
)

export default Card;