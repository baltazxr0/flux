import styled from "@emotion/styled";
import { Box, TextField, Typography } from "@mui/material";

const EmailInput = styled(TextField)({
  width: "270px",
  height: "44px",

  "& .MuiInputBase-input": {
    width: "270px",
    height: "44px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
      width: "270px",
      height: "44px",
    },
  },
});

const Container = styled(Box)(({}) => ({
  position: "static",
  bottom: 0,
  maxHeight: "670px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "64px 80px 48px 80px",
  gap: "64px",
}));

const FooterLinksContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}));

const BottomContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}));

const StyledList = styled("ul")(({}) => ({
  listStyle: "none",
  marginTop: "12px",
}));

const StyledListItem = styled("li")(({}) => ({
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#475467",
}));

const FooterLinkTitle = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#667085",
}));

export {
  Container,
  FooterLinksContainer,
  StyledList,
  StyledListItem,
  FooterLinkTitle,
  BottomContainer,
  EmailInput,
};
