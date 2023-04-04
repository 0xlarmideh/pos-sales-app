import * as React from "react"

import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginForm = () => {

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const [account, setAccount] = React.useState({
    accountName: "",
    password: ""
  })

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
        width: "500px",
      }}
    >
      <Typography variant="h2">Welcome back</Typography>
      <Typography variant="body1">Sign in to your Dashboard</Typography>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
      >
        <TextField
          variant="outlined"
          label="Username"
          value={account.accountName}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircleIcon></AccountCircleIcon>
              </InputAdornment>
            ),
          }}
          sx={{
            width: "100%",
          }}
          onChange={(e) => {
            setAccount({ ...account, accountName: e.target.value });
          }}
        />
        <FormControl
          variant="outlined"
          sx={{
            width: "100%",
          }}
        >
          <InputLabel htmlFor="account-password">Password</InputLabel>
          <OutlinedInput
            id="account-password"
            value={account.password}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={(e) => {
              setAccount({ ...account, password: e.target.value });
            }}
          />
        </FormControl>

        <Button
          variant="contained"
          sx={{
            paddingY: "12px"
          }}
          onClick={(e) => {
            e.preventDefault();
            setAccount({...account, accountName: "", password: ""})
            console.log("Cleared")
          }}
        >
          Sign in
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;
