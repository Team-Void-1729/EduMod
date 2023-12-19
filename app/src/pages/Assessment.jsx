import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import '../css/Assessment.css';

const Assessment = ({admin}) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [assessments, setAssessments] = useState([]);
    const [formData, setFormData] = useState({
        assessmentName: '',
        assessmentDescription: '',
        assessmentMarks: ''
    });
    const [adminValue,setAdminValue]=useState(true);
    const handleButtonClick = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleFormSubmit = () => {
        // Push the current form data to the assessments array
        setAssessments([...assessments, { ...formData }]);
        // Clear the form data after submission
        setFormData({
            assessmentName: '',
            assessmentDescription: '',
            assessmentMarks: ''
        });
        setOpenDialog(false); // Close the dialog after submission
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

           
    return (
        adminValue 
        ? 
            <div className="page">
                <div className="main">
                    <div className="left">
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                            label="Search"
                        />
                        {/* <List /> */}
                        {/* https://salehmubashar.com/blog/create-a-search-bar-in-react-js */}
                    </div>
                    <div className="right">
                        <Button
                            variant="contained"
                            className="custom-button"
                            onClick={handleButtonClick}
                        >
                            Add Assessment
                        </Button>
                        <Dialog
                            open={openDialog}
                            onClose={handleCloseDialog}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Form</DialogTitle>
                            <DialogContent>
                                {/* Your form components can go here */}
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="assessmentName"
                                    label="Assessment Name"
                                    type="text"
                                    fullWidth
                                    value={formData.assessmentName}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="assessmentDescription"
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    value={formData.assessmentDescription}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="assessmentMarks"
                                    label="Marks"
                                    type="text"
                                    fullWidth
                                    value={formData.assessmentMarks}
                                    onChange={handleInputChange}
                                />
                                {/* Add more fields as needed */}
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseDialog} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleFormSubmit} color="primary">
                                    Submit
                                </Button>
                            </DialogActions>
                        </Dialog>
                        {/* Display table with entered assessments */}
                    </div>
                </div>
                <div className="tableArea">
                    <div className="tablemain">
                        <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell><strong>Assessment Name</strong></TableCell>
                                                <TableCell><strong>Description</strong></TableCell>
                                                <TableCell><strong>Marks</strong></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {assessments.map((assessment, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{assessment.assessmentName}</TableCell>
                                                    <TableCell>{assessment.assessmentDescription}</TableCell>
                                                    <TableCell>{assessment.assessmentMarks}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
    :
            <div className="page">
                <div className="main">
                    <div className="left">
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                            label="Search"
                        />
                    </div>
                    <div className="right">
                        {/* <Button
                            variant="contained"
                            className="custom-button"
                            onClick={handleButtonClick}
                        >
                            Add Assessment
                        </Button> */}
                        <Dialog
                            open={openDialog}
                            onClose={handleCloseDialog}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Form</DialogTitle>
                            <DialogContent>
                                {/* Your form components can go here */}
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="assessmentName"
                                    label="Assessment Name"
                                    type="text"
                                    fullWidth
                                    value={formData.assessmentName}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="assessmentDescription"
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    value={formData.assessmentDescription}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="assessmentMarks"
                                    label="Marks"
                                    type="text"
                                    fullWidth
                                    value={formData.assessmentMarks}
                                    onChange={handleInputChange}
                                />
                                {/* Add more fields as needed */}
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseDialog} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleFormSubmit} color="primary">
                                    Submit
                                </Button>
                            </DialogActions>
                        </Dialog>
                        {/* Display table with entered assessments */}
                    </div>
                </div>
                <div className="tableArea">
                    <div className="tablemain">
                        <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell><strong>Assessment Name</strong></TableCell>
                                                <TableCell><strong>Description</strong></TableCell>
                                                <TableCell><strong>Marks</strong></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {assessments.map((assessment, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{assessment.assessmentName}</TableCell>
                                                    <TableCell>{assessment.assessmentDescription}</TableCell>
                                                    <TableCell>{assessment.assessmentMarks}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        );      
}

export default Assessment;
