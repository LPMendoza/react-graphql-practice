import React from 'react';

export const Notify = ({ errorMessage }) => {
  if (!errorMessage) return null;
  return (
    <div style={{ 
      backgroundColor: 'red',
      position: 'absolute',
      top: 0,
      width: '100%'
    }}>
      {errorMessage}
    </div>
  )
}