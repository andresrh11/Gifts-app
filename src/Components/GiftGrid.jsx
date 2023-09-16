import { useEffect, useState } from "react";
import { getImg } from "../Helpers/getImages";
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
    <div>
      <h3>{category}</h3>
      {imagenes.map((e) => (
        <div key={e.id} className="grilla">
          <ol>
            <img src={e.url} alt="" key={e.id} />
            <li key={imagenes.id}> {e.title}</li>
          </ol>
        </div>
      ))}
    </div>
  );
};
