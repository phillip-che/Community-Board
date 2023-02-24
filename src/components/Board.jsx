import React from "react";
import Card from "./Card"
import sunright from "../assets/sunright.jpg";

const Board = () => {
    return (
        
        <div className="Board">
            <Card img={sunright} name='Sunright Tea Studio' link='https://www.snrtea.com/'/>
            <Card img={sunright} name='NAME' link=''/>
            <Card img={sunright} name='NAME' link=''/>
            <Card img={sunright} name='NAME' link=''/>
            <Card img={sunright} name='NAME' link=''/>
            <Card img={sunright} name='NAME' link=''/>
            <Card img={sunright} name='NAME' link=''/>
            <Card img={sunright} name='NAME' link=''/>
            <Card img={sunright} name='NAME' link=''/>
        </div>
        
    )
}

export default Board;