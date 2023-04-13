import React from 'react';

const FindPerson = ({ persons }) => {
  
  if (!persons) return null;
  return (
    <div>
      <h2>Persons</h2>
      { persons && persons.map((person) => (
        <div key={person.id}>
          <h3>{person.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default FindPerson;