import { Avatar, Box } from "@mui/material";
import {
  CourseCard,
  CourseImage,
  CourseInfo,
  CourseActions,
  UserInfo,
  Topic,
  Name,
  Description,
  Author,
  Date,
  Price,
} from "./courseItemStyle";

import course1 from "../../assets/course1.jpg";

function CourseItem({ course }) {
  return (
    <CourseCard>
      <CourseImage component="img" sx={{ height: 140 }} image={course1} />
      <CourseInfo>
        <Topic variant="subtitle2">{course.topic}</Topic>
        <Name variant="subtitle2">{course.name}</Name>
        <Description variant="subtitle2">{course.description}</Description>
      </CourseInfo>
      <CourseActions>
        <Box sx={{ display: "flex" }}>
          <Avatar
            srcSet="../../assets/1.jpg"
            src="../../assets/1.jpg"
            sx={{ width: "40px", height: "40px" }}
          />
          <UserInfo>
            <Author>{course.author}</Author>
            <Date>20 Jan 2022</Date>
          </UserInfo>
        </Box>
        <Price>{course.price + "$"}</Price>
      </CourseActions>
    </CourseCard>
  );
}

export default CourseItem;
