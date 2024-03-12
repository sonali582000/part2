const Persons = ({ searchPerson }) => {
  return (
    <>
      {searchPerson.map((person) => (
        <div key={person.id}>
          {person.name} &nbsp;
          {person.number} &nbsp;
          <button>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Persons;
