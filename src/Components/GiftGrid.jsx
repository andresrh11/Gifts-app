import { useEffect, useState } from "react";
import { getImg } from "../Helpers/getImages";
import { GifCard } from "./GifCard";
const urlGif = "https://api.giphy.com/v1/gifs/search";
const urlSticket = "https://api.giphy.com/v1/stickers/search";

export const GiftGrid = ({ category, apiKey }) => {
  let i = 1;
  const [imagenes, setImagenes] = useState([]);
  useEffect(() => {
    console.log(1);
    getImg(setImagenes, apiKey, category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol className="card-grid">
        {imagenes.map((ev) => (
          <GifCard key={ev.id} {...ev} />
        ))}
      </ol>
    </>
  );
};
