import React from 'react';

import Main from "../../components/Main";
import FormSignUpLogin from "../../components/FormSignUpLogin";
import Routes from '../../routes';

import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
  return (
    <Main>
      <FormSignUpLogin />
      <Routes />
    </Main>
  );
};

export default Newtab;
