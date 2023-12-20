import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import {
  AccountCircle,
  Lock,
  Visibility,
  VisibilityOff,
  PermIdentity,
} from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import api from '../api'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState();
  const [eduID, setEduID] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // setOpen(false);
    
  };

  const handlePasswordGen = (length = 8) => {
    const passwd = Math.random().toString(36).slice(-length);
    console.log(passwd);
    setPassword(passwd);
  };

  const handleEduID = () => {
    const id = uuidv4();
    console.log(id);
    setEduID(id);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Register new user
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <Grid style={{ margin: "20px" }}>
            <Grid item style={{ gap: "20px" }}>
              Enter the Name
              <TextField
                autoFocus
                margin="dense"
                id="name"
                // label="Name"
                type="string"
                fullWidth
                variant="outlined"
              />
              Enter the email address
              <TextField
                autoFocus
                margin="dense"
                id="email"
                // label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item>
              Enter the User ID
              <TextField
                autoFocus
                margin="dense"
                id="id"
                value={eduID}
                // label="User Id"
                type="string"
                fullWidth
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <PermIdentity onClick={handleEduID} />
                    </InputAdornment>
                  ),
                }}
              />
              Enter password
              <TextField
                autoFocus
                margin="dense"
                id="password"
                // label="Password"
                value={password}
                type={showPassword ? "text" : "password"}
                fullWidth
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      {showPassword ? (
                        <VisibilityOff
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      ) : (
                        <Visibility
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      )}{" "}
                      <Lock onClick={handlePasswordGen} />
                    </InputAdornment>
                  ),
                }}
              />
              Role
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={42}
                  // label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={"USER"}>USER</MenuItem>
                  <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                  {/* <MenuItem value={30}>BOARD</MenuItem> */}
                </Select>
              </FormControl>
              Enter the years of experience
              <TextField
                autoFocus
                margin="dense"
                id="exp"
                // label="Years of Experience"
                type="number"
                fullWidth
                variant="outlined"
              />
              Mobile No.
              <TextField
                autoFocus
                margin="dense"
                id="name"
                // label="Name"
                type="number"
                fullWidth
                variant="outlined"
              />
              Domains
              <TextField
                autoFocus
                margin="dense"
                id="name"
                // label="Name"
                placeholder="Enter comma sep. domains"
                type="string"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
