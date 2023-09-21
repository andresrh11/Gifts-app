export const ButtonSwitch = ({ setTipo, tipo }) => {
  const changeName = () => {
    tipo == "Gifs" ? setTipo("Stickers") : setTipo("Gifs");
  };
  return (
    <>
      <button className="btnpx" onClick={() => changeName()}>
        {tipo}
      </button>
    </>
  );
};
