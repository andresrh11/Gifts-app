import { useState } from "react";
import "../src/styles.css";
import { AddCategory } from "./Components/AddCategory";
import { GiftGrid } from "./Components/GiftGrid";
import { ButtonSwitch } from "./Components/ButtonSwitch";

const apiKey = "zgpzLecnpi3Gqk6ae7Dko6eO0Mv95laR";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  return (
    <>
      <nav>Menu</nav>
      <div className="tip">Gift's App</div>
      <AddCategory setCategories={setCategories} categories={categories} />
      <ButtonSwitch />
      {categories.map((category) => (
        <GiftGrid key={category} category={category} apiKey={apiKey} />
      ))}
    </>
  );
};
