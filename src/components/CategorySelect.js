/* eslint-disable no-use-before-define */
import React, { useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { newsCategories } from '../global';
import { setCurrCategory, setCurrKeyword } from '../store/state';

const useStyles = makeStyles({
  listItemCustom: {
    marginBottom: '20px',
    color: 'rgba(104, 5, 5, 1)'
  }
})

export default function ComboBox() {
  const currCategory = useSelector((state) => state.currCategory);
  const currKeyword = useSelector((state => state.currKeyword));

  const dispatch = useDispatch();
  let history = useHistory();

  const classes = useStyles();

  const handleChange = (ev, newVal) => {
    dispatch(setCurrCategory(newVal));
    dispatch(setCurrKeyword('none'));
    // history.push('/');
    console.log('newVal', newVal)
  }
  return (
    <Autocomplete
      className={classes.listItemCustom}
      id="combo-box-demo"
      value={currCategory === 'none' ? "" : currCategory}
      options={newsCategories}
      onChange={handleChange}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Choose a category" variant="standard" />}
    />
  );
}
