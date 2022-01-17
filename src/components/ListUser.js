import React from 'react';

const ListUser = (props) => {
  const {person} = props;

  return (
    <div>
      <div>{person.name.title + ' ' + person.name.first + ' ' + person.name.last}</div>
      <div>{person.email}</div>
      <div>{person.location.city + '/' + person.location.country}</div>
    </div>
  );
};

export default ListUser;