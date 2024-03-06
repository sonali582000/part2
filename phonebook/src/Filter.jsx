const Filter = ({ searchKey, setSearchKey }) => {
  return (
    <>
      <p>
        filter shown with{" "}
        <input
          type="text"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </p>
    </>
  );
};

export default Filter;
