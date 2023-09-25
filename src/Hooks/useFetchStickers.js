import { useEffect, useState } from "react";
import { getSticker } from "../Helpers/getStickers";

export const useFetchStickers = (category, apiKey, tipo, limit) => {
  const [stickers, setstickers] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    getSticker(setstickers, apiKey, category, setIsLoad, limit);
  }, [tipo, limit]);

  return {
    stickers,
    isLoad,
  };
};
