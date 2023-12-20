import CourseCard from "../components/Course/CourseCard";
import Grid from "@mui/material/Grid";

const data = [
  { title: "Biology 101", date: "September 14, 2016" },
  { title: "Physics 101", date: "March 18, 2018" },
  { title: "Chemistry 101", date: "November 10, 2017" },
  { title: "IT 101", date: "August 20, 2011" },
  { title: "Compiler 101", date: "June 6, 2019" },
  { title: "DBMS 101", date: "July 7, 2020" },
  { title: "Maths 101", date: "September 2, 2022" },
  { title: "Economics 101", date: "Feb 2, 2023" },
];

const Dashboard = () => {
  return (
    <Grid
      container
      spacing={3}
      padding={2}
      sx={{ flexGrow: 1 }}
      justifyContent="space-evenly"
    >
      {data.map((elem) => (
        <Grid item>
          <CourseCard title={elem.title} date={elem.date} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
