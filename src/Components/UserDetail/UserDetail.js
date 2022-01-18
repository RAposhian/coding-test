import React from 'react';

const UserDetail = (props) => {
  const {name, email, phone, dob, location, picture} = props;

  return (
    <div>
      <div className='photo-container'>
        <div className='photo'>{picture.medium}</div>
      </div>
      <div className='name'>{name.title + ' ' + name.first + ' ' + name.last}</div>
      <div className='email'>{email}</div>
      <div className='number'>{phone}</div>
      <div className='address'>
        <div>{location.street.number + ' ' + location.street.name}</div>
        <div>{location.city + ', ' + location.state + ' ' + location.postcode}</div>
        <div>{location.country}</div>
      </div>
      <div className='dob'>{dob.date.splice(0, 9)}</div>
    </div>
  );
};

export default UserDetail;