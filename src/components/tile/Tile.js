import React from "react";

export const Tile = ({tileData}) => {
  // Converts Object to Array
  const tileArray = Object.values(tileData);

  return (
    <div className="tile-container">
      {tileArray.map((tileElement, index) => {
        if (index === 0) {
          return <p key={index} className="tile-title">{tileElement}</p>;
        } else {
          return <p key={index} className="tile">{tileElement}</p>;
        }
      })}
    </div>
  );
};