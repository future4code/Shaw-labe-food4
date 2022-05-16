import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function LoginPage() {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
        <TextField id="outlined-basic" label="Senha" variant="outlined" />
      </form>
      <div className={classes.root}>
      <Button variant="contained" color="secondary">
        Entrar
      </Button>
      <p>Não possui cadastro? Clique aqui.</p>
      
    </div>
    </div>

  );
}
