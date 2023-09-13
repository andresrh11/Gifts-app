import { useState } from "react";

export const GiftGrid = ({ category, apiKey }) => {
  const urlGif = "https://api.giphy.com/v1/gifs/search";
  const urlSticket = "https://api.giphy.com/v1/stickers/search";
  const [imagenes, setImagenes] = useState([]);
  const getImg = async () => {
    try {
      console.log(1);
      const promise = await fetch(
        `${urlGif}?q=${category}&limit=8&api_key=${apiKey}`
      );
      const { data } = await promise.json();
      const image = data.map((e) => e.images.original.url);

      setImagenes(image);
      console.log(imagenes);
    } catch (error) {
      return error;
    }
  };

  getImg();
  console.log(imagenes);
  return (
    <div key={imagenes}>
      <h3>{category}</h3>

      {imagenes.map((e) => (
        <img src={e} alt="" />
      ))}
    </div>
  );
};
