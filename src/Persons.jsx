import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { FIND_PERSON } from './persons/queries';

const Persons = ({ persons }) => {
  const [getPerson, result] = useLazyQuery(FIND_PERSON);
  const [person, setPerson] = useState(null);

  const showPerson = (person) => {
    getPerson({ variables: { nameToSearch: person } });
  }

  useEffect(() => {
    if (result.data) {
      setPerson(result.data.findPerson);
    }
  }, [result]);

  if (!persons) return null;

  if (person) {
    return (
      <div>
        <button onClick={() => setPerson(null)}>Regresar</button>
        <h2>{person.name}</h2>
        <h2>{person.address.street}</h2>
        <h2>{person.phone}</h2>
      </div>
    )
  }
  return (
    <div>
      <h2>Persons</h2>
      { persons && persons.map((person) => (
        <div key={person.id} onClick={() => showPerson(person.name)}>
          <h3>{person.name} - {person.phone}</h3>
        </div>
      ))}
    </div>
  );
};

export default Persons;