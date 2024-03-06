import { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "010-452365", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Ade Lovelace", number: "39-44-5323523", id: 5 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState();
  const [searchKey, setSearchKey] = useState("");

  const searchPerson = persons.filter((person) =>
    person.name.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())
  );

  const addMember = (event) => {
    event.preventDefault();

    const personName = {
      name: newName,
      number: newNum,
      id: Math.random() * 54367,
    };

    const filteredPerson = persons.filter(
      (person) => person.name === personName.name
    );

    filteredPerson.length > 0
      ? alert(`${newName} is already added to phonebook`)
      : console.log(persons);

    setPersons(persons.concat(personName));
    setNewName("");
    setNewNum("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchKey={searchKey} setSearchKey={setSearchKey} />
      <h2>add a new</h2>
      <PersonForm
        addMember={addMember}
        newName={newName}
        setNewName={setNewName}
        newNum={newNum}
        setNewNum={setNewNum}
      />
      <h2>Numbers</h2>
      <Persons searchPerson={searchPerson} />
    </div>
  );
};

export default App;
