import React from 'react';
import { useLocation } from 'react-router-dom';

const UserDetail = (props) => {
  const stateLocation = useLocation();
  const {name, email, phone, dob, location, picture} = stateLocation.state;


  return (
    <div>
      <div className='photo-container'>
        <image  className='photo'></image>
        <img 
                  src={picture.large} 
                  alt={`${name.first} ${name.last}`}
                  style={{ border: '2px solid black'}} />
      </div>
      <div className='name'>{`${name.title} ${name.first} ${name.last}`}</div>
      <div className='email'>{email}</div>
      <div className='number'>{phone}</div>
      <div className='address'>
        <div>{`${location.street.number} ${location.street.name}`}</div>
        <div>{`${location.city}, ${location.state} ${location.postcode}`}</div>
        <div>{location.country}</div>
      </div>
      <div className='dob'>{dob.date.slice(0, 9)}</div>
    </div>
  );
};

export default UserDetail;