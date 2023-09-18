const urlGif = "https://api.giphy.com/v1/gifs/search";
const urlSticket = "https://api.giphy.com/v1/stickers/search";
export const getImg = async (setImagenes, apiKey, category, setIsLoading) => {
  try {
    const promise = await fetch(
      `${urlGif}?q=${category}&limit=8&api_key=${apiKey}`
    );
    const { data } = await promise.json();
    const image = data.map((e) => ({
      id: e.id,
      title: e.title,
      url: e.images.original.url,
    }));

    setImagenes(image);
    setIsLoading(false);
    return image;
  } catch (error) {
    return error;
  }
};
