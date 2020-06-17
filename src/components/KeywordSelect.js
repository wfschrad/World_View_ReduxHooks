import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrKeyword, setCurrCategory } from '../store/state';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            // margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();

    const currKeyword = useSelector((state) => state.currKeyword);
    const dispatch = useDispatch();

    const handleChange = (ev) => {
        dispatch(setCurrKeyword(ev.target.value));
        dispatch(setCurrCategory('none'));
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                value={currKeyword === 'none' ? "" : currKeyword}
                onChange={handleChange}
                id="standard-basic"
                label="Topic"
                style={{ width: 218 }}
            />
        </form>
    );
}