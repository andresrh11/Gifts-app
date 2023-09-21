import { useEffect, useState } from "react";

export const ButtonSwitch = () => {
  const [tipo, setTipo] = useState("Stickers");
  const changeName = () => {
    tipo == "Gifs" ? setTipo("Stickets") : setTipo("Gifs");
  };
  useEffect(() => {
    console.log(1);
  }, [tipo]);
  return (
    <>
      <button className="btnpx" onClick={() => changeName()}>{tipo}</button>
    </>
  );
};
