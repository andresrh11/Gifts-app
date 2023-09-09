import { useState } from "react";
import "../src/styles.css";
import { AddCategory } from "./Components/AddCategory";

const apiKey = "zgpzLecnpi3Gqk6ae7Dko6eO0Mv95laR";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  return (
    <>
      <div>Gift Expert App</div>
      <AddCategory setCategories={setCategories} categories={categories} />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
