import { useState } from "react";
import "../src/styles.css";

const apiKey = "zgpzLecnpi3Gqk6ae7Dko6eO0Mv95laR";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);
  let valor = "";
  const addNewCategory = (valor) => {
    console.log(1);
    valor != "" && setCategories([...categories, valor]);
    console.log(categories);
  };
  console.log(categories);
  return (
    <>
      <div>Gift Expert App</div>
      <input type="text" onChange={(e) => (valor = e.target.value)} />
      <button onClick={() => addNewCategory(valor)}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
