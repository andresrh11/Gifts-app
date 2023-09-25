export const ChangeLimit = ({ setLimit }) => {
  const change = (e) => {
    setLimit(e);
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
