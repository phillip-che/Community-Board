import React from "react";
import Card from "./Card"
import sunright from "../assets/sunright.jpg";
import half from "../assets/halfandhalf.png";
import leaves from "../assets/7leaves.png";
import au from "../assets/au79.png";
import omomo from "../assets/omomo.jpg";
import cupofcha from "../assets/cupofcha.png";
import alley from "../assets/alley.png";
import yifang from "../assets/yifang.jpg";
import ftb from "../assets/ftb.png";
import bpmf from "../assets/bpmf.png";

const Board = () => {
    return (
        
        <div className="Board">
            <Card img={sunright} name='Sunright Tea Studio' link='https://www.snrtea.com/'/>
            <Card img={half} name='Half and Half Tea Express' link='http://www.halfandhalfteaexpress.com/'/>
            <Card img={leaves} name='7 Leaves Cafe' link='https://7leavescafe.com/'/>
            <Card img={au} name='AU79 Tea House' link='https://au79teahouse.com/'/>
            <Card img={omomo} name='Omomo Tea Shoppe' link='https://www.omomoteashoppe.com/'/>
            <Card img={cupofcha} name='Cup Of Cha Tea House' link='https://cupofchateahouse.com/'/>
            <Card img={alley} name='The Alley' link='https://the-alley.us/'/>
            <Card img={yifang} name='Yi Fang' link='https://yifangteausa.com/'/>
            <Card img={ftb} name='Factory Tea Bar' link='https://www.factoryteabar.com/'/>
            <Card img={bpmf} name='Bopomofo Cafe' link='https://www.bopomofocafe.com/'/>
        </div>

    )
}

export default Board;