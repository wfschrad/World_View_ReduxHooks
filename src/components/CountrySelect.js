/* eslint-disable no-use-before-define */
import React, { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { newsCountries } from '../global';
import { setCurrCountry } from '../store/state';

export default function ComboBox() {
    const currCountry = useSelector((state) => state.currCountry);

    const dispatch = useDispatch();
    let history = useHistory();

    const handleChange = (ev, newVal) => {
        dispatch(setCurrCountry(newsCountries[newVal]));
        history.push('/');
        console.log('newVal', newVal)
    }
    return (
    <Autocomplete
      id="combo-box-demo"
      options={Object.keys(newsCountries)}
      onChange={handleChange}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Choose a country" variant="standard" />}
    />
  );
}
