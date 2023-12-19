import CourseCard from "../components/Course/CourseCard";
import Grid from "@mui/material/Grid";

const Dashboard = () => {
  return (
    <Grid container spacing={3} padding={2} sx={{flexGrow:1}} justifyContent="space-evenly">
      <Grid item>
        <CourseCard />
      </Grid>
      <Grid item>
        <CourseCard />
      </Grid>
      <Grid item>
        <CourseCard />
      </Grid>
      <Grid item>
        <CourseCard />
      </Grid>
      <Grid item>
        <CourseCard />
      </Grid>
      <Grid item>
        <CourseCard />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
