import styled from "@emotion/styled";
import { Box, Button, InputBase, TextField, Typography } from "@mui/material";

const Container = styled(Box)(({}) => ({
  position: "static",
  bottom: 0,
  maxHeight: "670px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "64px 18px 48px 18px",
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
  marginBottom: "5px",
}));

const EmailInput = styled(InputBase)({
  border: "1px #D0D5DD solid",
  height: "44px",
  borderRadius: "8px",
  padding: "10px 14px",
});

const SubscribeButton = styled(Button)({
  backgroundColor: "#7F56D9",
  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
  borderRadius: "8px",
  width: "115px",
  height: "44px",
});

const CompanyName = styled(Typography)({
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "#7F56D9",
  textDecoration: "none",
  marginRight: "32px",
});

const PolicyText = styled(Typography)({
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#667085",
});

export {
  Container,
  FooterLinksContainer,
  StyledList,
  StyledListItem,
  FooterLinkTitle,
  BottomContainer,
  SubscribeButton,
  EmailInput,
  CompanyName,
  PolicyText,
};
