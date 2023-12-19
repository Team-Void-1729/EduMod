import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { Grid, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import { styled, alpha } from '@mui/material/styles';

const options = [
    'Edit',
    'Delete',
    'Duplicate',
    'Share'
  ];
  
  const ITEM_HEIGHT = 48;
  
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
  
  
    

const ModuleBox = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event) => {
      setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
      setAnchorEl2(null);
    };
  return (
    <div>
      <Box sx={{ bgcolor: '#cfe8fc', paddingLeft: "15px", height: '10vh', width: '50vw', margin: "20px", fontSize: '20px', alignItems: 'center', alignContent: 'center' }}>
            <Grid spacing={3} padding={2} direction='row' display={'flex'} justifyContent='space-between'>
              <Grid item>
                Module 1
                <h6 style={{ color: "#707070", textTransform: "none" }}>September 2, 2023</h6>
              </Grid>
              <Grid item>
                <div>
                  <Button
                    id="demo-customized-button"
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="text"
                    disableElevation
                    onClick={handleClick}
                    startIcon={<BlockIcon sx={{marginRight: "-18px"}}/>}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                  </Button>
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose} disableRipple>
                      <CheckCircleIcon style={{color: "#0B874B"}} />
                      Publish Module and all Items
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      <CheckCircleIcon style={{color: "#0B874B"}}/>
                      Publish Module only
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={handleClose} disableRipple>
                      <BlockIcon />
                      Unpublish Module and all Items
                    </MenuItem>
                  </StyledMenu>
                  <IconButton>
                    <AddIcon color="primary"/>
                  </IconButton>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick2}
                    color="primary"
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl2}
                    open={open2}
                    onClose={handleClose2}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '18ch',
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose2} disableRipple>
                      <EditIcon color='action'style={{marginRight: "15px"}}/>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={handleClose2} disableRipple>
                      <DeleteIcon color='action'style={{marginRight: "15px"}}/>
                      Delete
                    </MenuItem>
                    <MenuItem onClick={handleClose2} disableRipple>
                      <ShareIcon color='action' style={{marginRight: "15px"}}/>
                      Share
                    </MenuItem>
                    <MenuItem onClick={handleClose2} disableRipple>
                      <ContentCopyIcon color='action' style={{marginRight: "15px"}}/>
                      Duplicate
                    </MenuItem>
                  </Menu>
                </div>
              </Grid>
            </Grid>
          </Box>
    </div>
  )
}

export default ModuleBox