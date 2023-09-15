const urlGif = "https://api.giphy.com/v1/gifs/search";
const urlSticket = "https://api.giphy.com/v1/stickers/search";
export const getImg = async (setImagenes, apiKey, category) => {
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
    console.log(image);
    setImagenes(image);
    return image;
  } catch (error) {
    return error;
  }
};
