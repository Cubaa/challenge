import React, { FC, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  AccordionDetails,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import {
  formButtonStyle,
  formStyle,
  inputLabelStyle,
  inputPropsStyle,
  inputStyle,
} from "../panel.styled";

export const PanelForm: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = (): void => {
    setShowPassword((showPassword: boolean) => !showPassword);
  };

  return (
    <AccordionDetails>
      <Paper component="form" elevation={0} sx={formStyle}>
        <Grid container display="flex" justifyContent="center" spacing={1}>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              margin="dense"
              sx={inputStyle}
              InputLabelProps={{
                sx: inputLabelStyle,
              }}
              inputProps={{
                style: inputPropsStyle,
                placeholder: "Enter your name",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="standard"
              margin="dense"
              sx={inputStyle}
              InputLabelProps={{
                sx: inputLabelStyle,
              }}
              inputProps={{
                style: inputPropsStyle,
                placeholder: "Enter an email",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="dense"
              variant="standard"
              sx={inputStyle}
              InputLabelProps={{
                sx: inputLabelStyle,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      data-cy="visibility"
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      disableRipple
                      disableFocusRipple
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: inputPropsStyle,
                placeholder: "Enter a password",
              }}
            />
          </Grid>
          <Box pt={3}>
            <Button
              variant="text"
              disableRipple
              disableFocusRipple
              sx={formButtonStyle}
            >
              <Typography>Save</Typography>
            </Button>
          </Box>
        </Grid>
      </Paper>
    </AccordionDetails>
  );
};
