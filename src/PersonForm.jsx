import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ALL_PERSONS } from './persons/queries';
import { CREATE_PERSON } from './persons/mutations';

const PersonForm = ({ notifyError}) => {
  const [createPerson] = useMutation(CREATE_PERSON, {
    refetchQueries: [ALL_PERSONS],
    onError: (error) => {
      notifyError(error.graphQLErrors[0].message);
    }
  });
  const initialFormData = {
    name: '',
    street: '',
    city: '',
    phone: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    createPerson({ variables: { ...formData } });
    setFormData(initialFormData);
  };

  const handleOnChange = (event) => {
    const { name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <>
      <form 
        style={{ 
          padding: '16px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px', 
          backgroundColor: "#111",
          borderRadius: '8px',
        }}
        onSubmit={handleSubmit}
      >
        <h2>Create Person</h2>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="street"
          placeholder="street"
          value={formData.street}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="city"
          placeholder="city"
          value={formData.city}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          value={formData.phone}
          onChange={handleOnChange}
        />
        <input type='submit' value="Send" />
      </form>
    </>
  );
};

export default PersonForm;