import { TextField, Typography } from "@mui/material"
import { useState } from "react";

export const TextInput = ({ variant = 'body1', value, onChange }) => {
  const [isFocused, setFocus] = useState(false);
  const placeholder = 'Insert text here'
  function toggleFocus() { setFocus(!isFocused) };

  return (
    isFocused
      ? <TextField
          variant="standard"
          label={value || placeholder}
          onBlur={toggleFocus}
          onInput={onChange}
          autoFocus
        />
      : <Typography
          variant={variant}
          onClick={toggleFocus}
        >
          {value || placeholder}
        </Typography>
  )
}