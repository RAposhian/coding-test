import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`

const ListUser = (props) => {
  const {person} = props;

  return (
    <UserContainer>
      <div>{person.name.title + ' ' + person.name.first + ' ' + person.name.last}</div>
      <div>{person.email}</div>
      <div>{person.location.city + '/' + person.location.country}</div>
    </UserContainer>
  );
};

export default ListUser;