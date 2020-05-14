import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SearchIcon from '@material-ui/icons/Search';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
      <div>
            <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SearchIcon>send</SearchIcon>}
      >
        Browse
      </Button>
      </div>
  )
}
