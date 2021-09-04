import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { AddCircle, RemoveCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

function App() {
    const classes = useStyles();
    let peopleNumber = 1
  return (
    <div className="App">
      <div>
        <IconButton className={classes.button} color="primary">
          <RemoveCircle fontSize="large" />
        </IconButton>
        <span>{peopleNumber}</span>
        <IconButton
          className={classes.button}
          color="primary"
          onClick={() => peopleNumber++}
        >
          <AddCircle fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default App;
