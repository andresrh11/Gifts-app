export const AddCategory = ({ setCategories, categories }) => {
  let valor = "";
  const addNewCategory = (valor) => {
    valor != "" && setCategories([...categories, valor]);
  };
  return (
    <>
      <input type="text" onChange={(e) => (valor = e.target.value)} />
      <button onClick={() => addNewCategory(valor)}>Agregar</button>
    </>
  );
};
