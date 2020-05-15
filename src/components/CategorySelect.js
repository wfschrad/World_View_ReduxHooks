/* eslint-disable no-use-before-define */
import React, { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { newsCategories } from '../global';
import { setCurrCategory } from '../store/state';

const useStyles = makeStyles({
    listIteCustom: {
        marginBottom: '20px'
    }
})

export default function ComboBox() {
    const currCategory = useSelector((state) => state.currCategory);

    const dispatch = useDispatch();
    let history = useHistory();

    const classes = useStyles();

    const handleChange = (ev, newVal) => {
        dispatch(setCurrCategory(newVal));
        // history.push('/');
        console.log('newVal', newVal)
    }
    return (
    <Autocomplete
    className={classes.listItemCustom}
      id="combo-box-demo"
      options={newsCategories}
      onChange={handleChange}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Choose a category" variant="standard" />}
    />
  );
}
