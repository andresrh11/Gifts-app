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
    <>
      <h3>{category}</h3>
      <div className="grilla">
        <ol>
          {imagenes.map((e) => (
            <div key={e.id} className="grilla">
              <img src={e.url} alt="" key={e.id} />
              <li key={imagenes.id} className="ttl">
                {e.title}
              </li>
            </div>
          ))}
        </ol>
      </div>
    </>
  );
};
