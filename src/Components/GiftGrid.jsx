export const GiftGrid = ({ category, apiKey }) => {
  const urlGif = "api.giphy.com/v1/gifs/search";
  const urlSticket = "api.giphy.com/v1/stickers/search";
  console.log(1);
  console.log(category);
  return (
    <div key={category}>
      <h3>{category}</h3>
      <ul></ul>
    </div>
  );
};
