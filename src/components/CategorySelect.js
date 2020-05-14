/* eslint-disable no-use-before-define */
import React, { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { newsCategories } from '../global';
import { setCurrCategory } from '../store/state';

export default function ComboBox() {
    const currCategory = useSelector((state) => state.currCategory);

    const dispatch = useDispatch();
    let history = useHistory();

    const handleChange = (ev, newVal) => {
        dispatch(setCurrCategory(newVal));
        history.push('/');
        console.log('newVal', newVal)
    }
    return (
    <Autocomplete
      id="combo-box-demo"
      options={newsCategories}
      onChange={handleChange}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Choose a category" variant="standard" />}
    />
  );
}
