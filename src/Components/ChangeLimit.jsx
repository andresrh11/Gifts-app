export const ChangeLimit = ({ setLimit }) => {
  const change = (e) => {
    console.log(e);
    setLimit(e);
    console.log(1);
  };
  return (
    <>
      <input
        type="range"
        max={20}
        min={1}
        step={1}
        onChange={(e) => change(e.target.value)}
      />
    </>
  );
};
