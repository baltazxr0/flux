import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Typography,
} from "@mui/material";
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
  minHeight: "500px",
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
  width: "100%",
  padding: 0,
  display: "flex",
  justifyContent: "space-between",
});

const UserInfo = styled(Box)({
  display: "flex",
  marginLeft: "12px !important",
  flexDirection: "column",
});

const Name = styled(Typography)({
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "32px",
  marginTop: "12px",
});

const Author = styled(Typography)({
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#101828",
});

const Topic = styled(Typography)({
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#6941C6",
});

const Description = styled(Typography)({
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#475467",
  marginTop: "8px",
});

const Date = styled(Typography)({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#475467",
});

const Price = styled(Typography)({
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#6941C6",
});

export {
  CourseCard,
  CourseImage,
  CourseInfo,
  CourseActions,
  UserInfo,
  Name,
  Topic,
  Description,
  Price,
  Author,
  Date,
};
