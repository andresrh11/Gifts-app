import { useEffect, useState } from "react";
import { getImg } from "../Helpers/getImages";

export const useFetchGifs = (category, apiKey) => {
  const [imagenes, setImagenes] = useState([]);
  useEffect(() => {
    getImg(setImagenes, apiKey, category);
  }, []);

  return {
    imagenes: imagenes,
    isLoading: true,
  };
};
