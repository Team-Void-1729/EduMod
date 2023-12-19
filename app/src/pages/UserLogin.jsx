import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import React, { useContext } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, redirect } from "react-router-dom";

const UserLogin = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = { user: "user123" };
    setUser(users);
    localStorage.setItem("loggedIn", true);
    navigate("/");
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        lg={6}
        sx={{
          backgroundColor: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box display={"flex"} flexDirection="column" gap={5}>
          <img src="/logo.png" width={200} alt="asd" />
          <img src="/name.png" width={200} alt="asd" />
        </Box>
      </Grid>
      <Grid
        item
        lg={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Paper elevation={3} sx={{ width: 400 }}>
          <Stack spacing={2} direction="column" sx={{ m: 4 }}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Email"
              // onChange={(e) => setFirstName(e.target.value)}
              // value={firstName}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Password"
              // onChange={(e) => setFirstName(e.target.value)}
              // value={firstName}
              fullWidth
              required
            />
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="contained" color="error">
              Cancel
            </Button>
          </Stack>
          {/* <Label>User</Label>
          <TextField id="filled-basic" label="Filled" variant="filled" /> */}
        </Paper>

        {/* <FormControl defaultValue="" required>
          <Label>Name</Label>
          <StyledInput placeholder="Write your name here" />
          <FormHelperText />
        </FormControl> */}
      </Grid>
      {/* <button onClick={handleLogin}>Log in</button> */}
      {/* <div>hi {JSON.stringify(user)}</div> */}
    </Grid>
  );
};

export default UserLogin;
