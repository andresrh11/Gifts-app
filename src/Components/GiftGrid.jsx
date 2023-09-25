import { useEffect, useState } from "react";
import { getImg } from "../Helpers/getImages";
import { GifCard } from "./GifCard";
import { useFetchGifs } from "../Hooks/useFetchGifs";
import { useFetchStickers } from "../Hooks/useFetchStickers";
const urlGif = "https://api.giphy.com/v1/gifs/search";
const urlSticket = "https://api.giphy.com/v1/stickers/search";

export const GiftGrid = ({ category, apiKey, tipo, limit }) => {
  const { imagenes, isLoading } = useFetchGifs(category, apiKey, tipo, limit);
  const { stickers } = useFetchStickers(category, apiKey, tipo, limit);
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <ol className="card-grid">
        {tipo == "Stickers"
          ? stickers.map((ev) => <GifCard key={ev.id} {...ev} />)
          : imagenes.map((ev) => <GifCard key={ev.id} {...ev} />)}
      </ol>
    </>
  );
};
