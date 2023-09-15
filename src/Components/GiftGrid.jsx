import { useEffect, useState } from "react";
import { getImg } from "../Helpers/getImages";
const urlGif = "https://api.giphy.com/v1/gifs/search";
const urlSticket = "https://api.giphy.com/v1/stickers/search";

export const GiftGrid = ({ category, apiKey }) => {
  const [imagenes, setImagenes] = useState([]);
  useEffect(() => {
    console.log(1);
    getImg(setImagenes, apiKey, category);
  }, []);

  return (
    <div key={imagenes}>
      <h3>{category}</h3>
      <div className="grilla">
        {imagenes.map((e) => (
          <img key={e.id} src={e.url} alt="" />
        ))}
      </div>
    </div>
  );
};
