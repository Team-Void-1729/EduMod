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
import React, { useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, redirect } from "react-router-dom";
import api from "../api";


const users = { email: "user123@gmail.com", password:"asdwer" };

const UserLogin = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwdRef = useRef();

  const handleLogin = async() => {
    const data = {"email":emailRef.current.value, "password":passwdRef.current.value}
    console.log(data)

    const res = await api.login(data)
    setUser(res);
    console.log(res)
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
              inputRef={emailRef}
              // placeholder={users.email}
              // onChange={(e) => setFirstName(e.target.value)}
              // value={firstName}
              onChange={()=>setUser()}
              fullWidth
              required
            />
            <TextField
              type="password"
              variant="outlined"
              color="secondary"
              label="Password"
              inputRef={passwdRef}
              // placeholder={users.password}
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
