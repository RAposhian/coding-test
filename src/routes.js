import React from 'react';
import {Route, Routes} from 'react-router-dom';
import UserDetail from './Components/UserDetail/UserDetail';
import Landing from './Components/Landing/Landing';


export default (
      <Routes>
         <Route exact path='/' element={<Landing />}/>
         <Route path='/user' element={<UserDetail />}/>
      </Routes>
)