import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import SearchIcon from '@mui/icons-material/Search';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import '../css/Announcement.css';

const Announcement = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [paragraphs, setParagraphs] = useState([]);
    const [newParagraph, setNewParagraph] = useState('');
    const handleAddButtonClick = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleParagraphSubmit = () => {
        if (newParagraph.trim() !== '') {
            setParagraphs([...paragraphs, newParagraph]);
            setNewParagraph('');
            setOpenDialog(false);
        }
    };

    const handleInputChange = (event) => {
        setNewParagraph(event.target.value);
    };

    return (
        <div className="announceMain">
            <div className="top">
                <div className="topleft">
                  <div className="search-container">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <SearchIcon/>
                    {/* <button className="search-button">Search</button> */}
                  </div>
                </div>
                <div className="topright">
                    <Button
                        variant="contained"
                        className='addBtn'
                        disableElevation
                        onClick={handleAddButtonClick}
                    >
                        <AddIcon/><strong>Add</strong>
                    </Button>
                </div>
            </div>
            <div className="down">
                {paragraphs.map((paragraph, index) => (
                    <div className="announcements" key={index}>
                        <div className="circle"></div>
                        <p>{paragraph}</p>
                    </div>
                ))}
                <Dialog
                    open={openDialog}
                    onClose={handleCloseDialog}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add Paragraph</DialogTitle>
                    <DialogContent>
                        <textarea
                            rows="4"
                            cols="50"
                            placeholder="Enter paragraph..."
                            className="paragraph-input"
                            value={newParagraph}
                            onChange={handleInputChange}
                        ></textarea>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleParagraphSubmit} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default Announcement;
