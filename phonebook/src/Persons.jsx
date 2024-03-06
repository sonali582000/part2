const Persons = ({ searchPerson }) => {
  return (
    <>
      {searchPerson.map((person) => (
        <div key={person.id}>
          {person.name} &nbsp;
          {person.number}
        </div>
      ))}
    </>
  );
};

export default Persons;
