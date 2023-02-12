import { useState } from "react";
import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import CourseItem from "../CourseItem/courseItem.component";
import { courseList } from "../../data/coursesData";
import { useEffect } from "react";

function CourseList() {
  return (
    <Grid
      container
      sx={{ padding: "0px 16px" }}
      columnGap="32px"
      rowGap="48px"
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {courseList.map((course) => {
        return (
          <Grid item xs={12} sm={6} md={3} lg={3} key={course.id}>
            <CourseItem course={course} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CourseList;
