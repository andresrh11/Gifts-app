import { useState } from "react";
const urlGif = "https://api.giphy.com/v1/gifs/search";
const urlSticket = "https://api.giphy.com/v1/stickers/search";

const getImg = async (setImagenes, apiKey, category) => {
  try {
    const promise = await fetch(
      `${urlGif}?q=${category}&limit=8&api_key=${apiKey}`
    );
    const { data } = await promise.json();
    const image = data.map((e) => e.images.original.url);

    setImagenes(image);
  } catch (error) {
    return error;
  }
};

export const GiftGrid = ({ category, apiKey }) => {
  const [imagenes, setImagenes] = useState([]);
  getImg(setImagenes, apiKey, category);

  return (
    <div key={imagenes}>
      <h3>{category}</h3>
      <div className="grilla">
        {imagenes.map((e, i) => (
          <img key={i} src={e} alt="" />
        ))}
      </div>
    </div>
  );
};
