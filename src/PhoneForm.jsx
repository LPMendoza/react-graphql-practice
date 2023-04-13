import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ALL_PERSONS } from './persons/queries';
import { EDIT_NUMBER } from './persons/mutations';

const PhoneForm = ({ notifyError}) => {
  const [createPerson] = useMutation(EDIT_NUMBER, {
    refetchQueries: [ALL_PERSONS],
    onError: (error) => {
      notifyError(error.graphQLErrors[0].message);
    }
  });
  const initialFormData = {
    name: '',
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
        <h2>Edit Phone Number</h2>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          value={formData.phone}
          onChange={handleOnChange}
        />
        <input type='submit' value="Change Phone" />
      </form>
    </>
  );
};

export default PhoneForm;