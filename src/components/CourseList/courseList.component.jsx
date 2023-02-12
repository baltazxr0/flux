import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import CourseItem from "../CourseItem/courseItem.component";

const courseList = [
  {
    id: 1,
    name: "Javascript",
  },
  {
    id: 2,
    name: "React",
  },
  {
    id: 3,
    name: "C++",
  },
  {
    id: 4,
    name: "Django",
  },
  {
    id: 5,
    name: "Python",
  },
  {
    id: 6,
    name: "Java",
  },
  {
    id: 7,
    name: "Html + Css",
  },
  {
    id: 8,
    name: "Kotlin",
  },
];

function CourseList() {
  return (
    <Grid
      container
      spacing={"30px"}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {courseList.map((course) => {
        return (
          <Grid item key={course.id} xs="auto">
            <CourseItem course={course} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CourseList;
