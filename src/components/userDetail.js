import React from 'react';

const UserDetail = (props) => {
  const {name, email, cell, dob, location, picture} = props;

  return (
    <div>
      <div className='photo-container'>
        <div className='photo'></div>
      </div>
      <div className='name'>name</div>
      <div className='email'>email</div>
      <div className='address'>address</div>
      <div className='number'>phone number</div>
      <div className='dob'>date of birth</div>
    </div>
  );
};

export default UserDetail;