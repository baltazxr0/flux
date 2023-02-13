import { Card, CardActions, CardContent, CardMedia, Box } from "@mui/material";
import { styled } from "@mui/material";

const CourseCard = styled(Card)({
  backgroundColor: "#FFFFFF",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  boxShadow:
    "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
  padding: "24px 24px 32px 24px",
  gap: "32px",
  maxWidth: "384px",
});

const CourseImage = styled(CardMedia)({
  height: "100%",
  width: "100%",
  minHeight: "200px",
  maxHeight: "240px",
});

const CourseInfo = styled(CardContent)({
  padding: 0,
});

const CourseActions = styled(CardActions)({
  padding: 0,
});

const UserInfo = styled(Box)({
  display: "flex",
  marginLeft: "12px !important",
  flexDirection: "column",
});

export { CourseCard, CourseImage, CourseInfo, CourseActions, UserInfo };
