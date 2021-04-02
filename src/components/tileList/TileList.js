import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = ({tileData}) => {
  return (
    <ul>
      {tileData.map((prop, index) => {
        return <Tile key={index} tileData={prop} />
      })}
    </ul>
  );
};