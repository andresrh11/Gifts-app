import { useState } from "react";

export const AddCategory = ({ setCategories, categories }) => {
  const [value, setValue] = useState("");
  const addNewCategory = (value) => {
    value != "" &&
      !categories.includes(value) &&
      setCategories([value, ...categories]);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addNewCategory(value);
    setValue("");
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </form>
  );
};
