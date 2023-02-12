import { Avatar, Grid, Typography } from "@mui/material";
import {
  CourseCard,
  CourseImage,
  CourseInfo,
  CourseActions,
  UserInfo,
} from "./courseItemStyle";

import course1 from "../../assets/course1.jpg";

function CourseItem({ course }) {
  return (
    <CourseCard>
      <CourseImage component="img" sx={{ height: 140 }} image={course1} />
      <CourseInfo>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#6941C6",
          }}
        >
          {course.topic}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "32px",
            marginTop: "12px",
          }}
        >
          {course.name}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#475467",
            marginTop: "8px",
          }}
        >
          {course.description}
        </Typography>
      </CourseInfo>
      <CourseActions>
        <Avatar
          srcSet="../../assets/1.jpg"
          src="../../assets/1.jpg"
          sx={{ width: "40px", height: "40px" }}
        />
        <UserInfo>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#101828",
            }}
          >
            {course.author}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#475467",
            }}
          >
            20 Jan 2022
          </Typography>
        </UserInfo>
      </CourseActions>
    </CourseCard>
  );
}

export default CourseItem;
