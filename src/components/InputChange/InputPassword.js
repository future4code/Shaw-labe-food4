import React from "react";
import { TextField } from "@material-ui/core";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { useState } from "react";
import {InputPasswordStyle, PasswordStyle} from "./styled"

//Como mudar o estado do password
export const InputPassword = ({ form, onChange }) => {
  const [senhaOn, setSenhaOn] = useState(false);
  
  return (
    <PasswordStyle>
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
      <InputPasswordStyle
        onClick={() => setSenhaOn(!senhaOn)}
      >
        {senhaOn ? <Visibility /> : <VisibilityOff />}
      </InputPasswordStyle>

    </PasswordStyle>
  );
};
