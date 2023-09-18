import { useEffect, useState } from "react";
import { getImg } from "../Helpers/getImages";

export const useFetchGifs = (category, apiKey) => {
  const [imagenes, setImagenes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getImg(setImagenes, apiKey, category, setIsLoading);
  }, []);

  return {
    imagenes,
    isLoading,
  };
};
