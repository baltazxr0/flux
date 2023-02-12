import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";

import { styled } from "@mui/material";

import course1 from "../../assets/course1.jpg";

// const StyledCard = styled(Card)`
//   height: 280px;
//   width: 300px;
//   min-height: 260px;
//   max-height: 300px;
// `;

const StyledCard = styled(Card)(({ theme }) => ({
  height: 280,
}));

const StyledCardMedia = styled(CardMedia)``;

const StyledCardContent = styled(CardContent)``;
const StyledCardActions = styled(CardActions)``;

function CourseItem({ course }) {
  return (
    <StyledCard
      sx={{
        width: {
          xs: 320,
          sm: 300,
          md: 300,
          lg: 300,
          xl: 300,
        },
      }}
    >
      <StyledCardMedia component="img" sx={{ height: 140 }} image={course1} />
      <StyledCardContent>
        <Typography>{course.name}</Typography>
      </StyledCardContent>
      <StyledCardActions></StyledCardActions>
    </StyledCard>
  );
}

export default CourseItem;
