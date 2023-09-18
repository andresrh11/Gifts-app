import { useEffect, useState } from "react";
import { getImg } from "../Helpers/getImages";
import { GifCard } from "./GifCard";
import { useFetchGifs } from "../Hooks/useFetchGifs";
const urlGif = "https://api.giphy.com/v1/gifs/search";
const urlSticket = "https://api.giphy.com/v1/stickers/search";

export const GiftGrid = ({ category, apiKey }) => {
  const { imagenes, isLoading } = useFetchGifs(category, apiKey);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <ol className="card-grid">
        {imagenes.map((ev) => (
          <GifCard key={ev.id} {...ev} />
        ))}
      </ol>
    </>
  );
};
