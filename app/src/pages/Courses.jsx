import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import CoursePopup from "../components/Course/CreateCourse";
import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  Modal as BaseModal,
  Grid,
  Divider,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import api from "../api/";
import { useEffect } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fff",
    color: "#000",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "theme.palette.action.hover",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function AllCourses() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [courses, setCourses] = React.useState([]);

  const getAllCourses = async () => {
    const c = await api.getCourses();
    setCourses(c);
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  if (courses?.length == 0) return "Loading...";
  else
    return (
      <>
        <Grid style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
          <Grid item>
            <div
              style={{
                marginBottom: "10px",
                position: "absolute",
                right: "40px",
                marginTop: "40px",
                marginRight: "10px",
              }}
            >
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={handleOpen}
              >
                Course
              </Button>
              <Modal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                slots={{ backdrop: StyledBackdrop }}
              >
                <ModalContent sx={{ width: 400 }}>
                  <Box sx={{ bgcolor: "background.paper" }}>
                    <Box sx={{ my: 2, mx: 2 }}>
                      <Grid container alignItems="center">
                        <Grid item xs>
                          <Typography gutterBottom variant="h5" component="div">
                            Create Course
                          </Typography>
                        </Grid>
                        <Grid item>
                          <IconButton onClick={handleClose}>
                            <CloseIcon sx={{ fontSize: 20 }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Box>
                    <Divider variant="middle" />
                    <Box sx={{ m: 3 }}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        style={{ color: "#000" }}
                      >
                        Course Name
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Name"
                        style={{ width: "100%" }}
                        size="auto"
                      />
                    </Box>
                    <Divider variant="middle" />
                    <Box sx={{ mt: 3, ml: 2, mb: 1 }}>
                      <Stack spacing={2} direction="row">
                        <Button variant="outlined" onClick={handleClose}>
                          Cancel
                        </Button>
                        {/* <Button variant="contained">Create</Button> */}
                        <Link to="/module">
                          <Button variant="contained">Create</Button>
                        </Link>
                      </Stack>
                    </Box>
                  </Box>
                </ModalContent>
              </Modal>
            </div>
          </Grid>
          <Grid item>
            <div>
              <TableContainer style={{ backgroundColor: "#F0F7FF" }}>
                <Table
                  sx={{ width: "94%", m: 5, backgroundColor: "#fff" }}
                  aria-label="customized table"
                >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell style={{ fontWeight: "bold" }}>
                        Course
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        Title
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        Stream
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        Sem
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        Type
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {courses?.map((row) => (
                      <StyledTableRow key={row?.courseid}>
                        <StyledTableCell component="th" scope="row">
                          {row?.code}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row?.title}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row?.stream}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row?.sem}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row?.type}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid>
        </Grid>
      </>
    );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "MuiBackdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
    padding: 24px;
    color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `
);

const TriggerButton = styled("button")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }

    &:active {
      background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px
        ${theme.palette.mode === "dark" ? blue[300] : blue[200]};
      outline: none;
    }
  `
);
