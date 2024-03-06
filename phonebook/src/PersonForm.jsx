const PersonForm = ({ addMember, newName, setNewName, newNum, setNewNum }) => {
  return (
    <>
      <form onSubmit={addMember}>
        <div>
          name:{" "}
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <div>
            number:{" "}
            <input
              type="number"
              value={newNum}
              onChange={(e) => setNewNum(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
