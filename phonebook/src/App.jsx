import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addMember = (event) => {
    event.preventDefault();

    setNewName(newName);
    setPersons(persons.concat(newName));

    console.log(persons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addMember}>
        <div>
          name:{" "}
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {})}
    </div>
  );
};

export default App;
