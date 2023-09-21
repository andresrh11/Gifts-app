const urlSticker = "https://api.giphy.com/v1/stickers/search";
export const getSticker = async (setStickers, apiKey, category, setIsLoad) => {
  try {
    const promise = await fetch(
      `${urlSticker}?q=${category}&limit=8&api_key=${apiKey}`
    );
    const { data } = await promise.json();
    const image = data.map((e) => ({
      id: e.id,
      title: e.title,
      url: e.images.original.url,
    }));
    setStickers(image);
    setIsLoad(false);
    return image;
  } catch (error) {
    return error;
  }
};
