import { useEffect, useState } from "react";
import { getImg } from "../Helpers/getImages";

export const useFetchGifs = (category, apiKey, tipo) => {
  const [imagenes, setImagenes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getImg(setImagenes, apiKey, category, setIsLoading);
  }, [tipo]);

  return {
    imagenes,
    isLoading,
  };
};
