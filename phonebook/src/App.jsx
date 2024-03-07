import { useEffect, useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState();
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      const data = response.data;
      setPersons(data);
      console.log(data);
    });
  }, []);

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
