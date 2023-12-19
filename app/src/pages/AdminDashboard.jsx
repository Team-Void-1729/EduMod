import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Grid} from '@mui/material';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <Grid style={{margin: "20px"}}>
            <Grid item style={{gap: "20px"}}>
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
                // label="User Id"
                type="string"
                fullWidth
                variant="outlined"
            />
            Enter password
            <TextField
                autoFocus
                margin="dense"
                id="password"
                // label="Password"
                type="password"
                fullWidth
                variant="outlined"
            />
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
            </Grid>
          </Grid> 
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">Cancel</Button>
          <Button onClick={handleClose} variant="contained">Register</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}