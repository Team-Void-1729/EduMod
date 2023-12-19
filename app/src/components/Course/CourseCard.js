import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CampaignIcon from '@mui/icons-material/Campaign';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CommentIcon from '@mui/icons-material/Comment';
import FolderIcon from '@mui/icons-material/Folder';
import Img from "../../assets/image/img.png";
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';


export default function CourseCard(){
    const cardStyles = {
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "5px",
        transition: "box-shadow 0.3s ease-in-out", // Adding transition for smoother hover effect
        "&:hover": {
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Applying box-shadow on hover
        },
      };
      
    const arr=["#F16502", "#FF8096", "#80ABFF", "#AA80FF", "#5EEE68", "#C41755", "#E2850E", "#AD4951"];
    const newRandomColor= arr[Math.floor(Math.random()*8)];
    console.log(newRandomColor)
    return(
        <div>
            <Card sx={{ maxWidth: 250, maxHeight: 300, }} elevation={3}>
                {/* <CardMedia
                    component="img"
                    height="104"
                    image={Img}
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                /> */}
                <CardContent style={{height: "145px", backgroundColor: newRandomColor, color: "#fff"}}>
                    <Typography gutterBottom variant="h5" component="div">
                    Biology 101
                    </Typography>
                    <Typography variant="body2" color="#fff">
                    September 14, 2016
                    </Typography>
                </CardContent>
                <Divider/>
                <CardActions disableSpacing>
                    <IconButton aria-label="Announcements" style={{marginRight:'8px'}}>
                        <CampaignIcon />
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    <IconButton aria-label="Assignments" style={{marginRight:'8px'}}>
                        <AssignmentIcon />
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    <Link to="/Discussion">
                        <IconButton aria-label="Discussions" style={{marginRight:'8px'}}>
                            <CommentIcon />
                        </IconButton>
                    </Link>     
                    <Divider orientation="vertical" flexItem />                   
                    <IconButton aria-label="Files" style={{marginRight:'8px'}}>
                        <FolderIcon />
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}