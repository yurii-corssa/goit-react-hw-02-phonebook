export const Filter = ({ onChange, filter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={onChange} value={filter} />
    </>
  );
};
