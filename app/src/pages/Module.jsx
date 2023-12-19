import AddIcon from '@mui/icons-material/Add';
import { Grid, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import ModuleBox from '../components/ModuleBox'


const Module = () => {
  return (
    <div className="title" style={{ position: "absolute", left: "170px" }}>
      <Grid container spacing={3} padding={2} sx={{ flexGrow: 1 }} justifyContent="space-evenly">
        <Grid item style={{ display: "flex", flexDirection: "column" }}>
          <Grid style={{display: "flex", flexDirection: "column"}}>
            <Grid item style={{display: "flex", flexDirection: "row", marginLeft: "20px", marginTop: "20px" }}>
              <Button variant="contained" style={{ marginRight: "20px"}}>View Progress</Button>
              <Button variant="outlined" style={{ width: "120px" }} startIcon={<AddIcon />}>
                Module
              </Button>
            </Grid>
            <Grid item> 
              <ModuleBox/>
              <ModuleBox/>
              <ModuleBox/>
              <ModuleBox/>
              <ModuleBox/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          
        </Grid>
      </Grid>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Module;