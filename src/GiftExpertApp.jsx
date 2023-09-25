import { useEffect, useState } from "react";
import "../src/styles.css";
import { AddCategory } from "./Components/AddCategory";
import { GiftGrid } from "./Components/GiftGrid";
import { ButtonSwitch } from "./Components/ButtonSwitch";
import Footer from "./Components/Footer";
import { ChangeLimit } from "./Components/ChangeLimit";

const apiKey = "zgpzLecnpi3Gqk6ae7Dko6eO0Mv95laR";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);
  const [tipo, setTipo] = useState("Stickers");
  const [limit, setLimit] = useState(8);
  console.log(tipo);
  return (
    <>
      <h2>{tipo} App</h2>
      <AddCategory setCategories={setCategories} categories={categories} />
      <ChangeLimit setLimit={setLimit} />
      <ButtonSwitch tipo={tipo} setTipo={setTipo} />
      {categories.map((category) => (
        <GiftGrid
          key={category}
          category={category}
          apiKey={apiKey}
          tipo={tipo}
          limit={limit}
        />
      ))}
      <Footer />
    </>
  );
};
