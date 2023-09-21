import { useEffect, useState } from "react";
import { getSticker } from "../Helpers/getStickers";

export const useFetchStickers = (category, apiKey, tipo) => {
  const [stickers, setstickers] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    getSticker(setstickers, apiKey, category, setIsLoad);
  }, [tipo]);

  return {
    stickers,
    isLoad,
  };
};
