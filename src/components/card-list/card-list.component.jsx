// import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="cardlist">
      {props.monsters.map((el) => (
        <Card key={el.id} monster={el} />
      ))}
    </div>
  );
};
