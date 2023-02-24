import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <img className="image" src={props.img} />
            <h2>{props.name}</h2>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button>Visit Website</button>
            </a>
        </div>
    )
}

export default Card;