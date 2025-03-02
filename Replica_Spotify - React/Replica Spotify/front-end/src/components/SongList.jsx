/* eslint-disable react/prop-types */
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  // let items = 5;

  const [items, setItems] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((_, index) => index < items)
        .map((currSongObj, index) => (
          <SongItem {...currSongObj} index={index} key={index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
        }}
      >
        Ver Mais
      </p>
    </div>
  );
};

export default SongList;
