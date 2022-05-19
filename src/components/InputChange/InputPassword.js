import React from "react";
import { TextField } from "@material-ui/core";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { useState } from "react";

//Como mudar o estado do password
export const InputPassword = ({form, onChange}) => {
  const [senhaOn, setSenhaOn] = useState(false);

  return (
    <div style = {{display: "flex", position: "relative"}}>
      <TextField
        name="password"
        value={form.password}
        onChange={onChange}
        type={senhaOn ? "text" : "password"}
        size="30"
        placeholder="Senha"
        required
        autoFocus
        variant="outlined"
        label="Senha"
        fullWidth
        margin="normal"
      />
      <button style = {{background: "transparent", border: 0, /* position: "absolute" */}} onClick={() => setSenhaOn(!senhaOn)}> {senhaOn ? <Visibility/> : <VisibilityOff/>  } </button>
    </div>
  );
};
