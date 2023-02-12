import styled from "styled-components";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const StyledAppbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#F9F5FF",
  height: "80px",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  height: "80px",
  padding: "18px  24px !important",
  justifyContent: "space-between",
  backgroundColor: "#F9F5FF",
  color: "#7F56D9",
}));

const NavBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "32px",
  alignItems: "center",
}));

const LoginButton = styled(Button)(({ theme }) => ({
  width: "83px",
  height: "44px",
  marginRight: "12px !important",
  fontSize: "16px !important",
  color: theme.buttons,
}));

const SignupButton = styled(Button)(({ theme }) => ({
  width: "95px",
  height: "44px",
  fontSize: "16px !important",
  borderRadius: "8px !important",
  backgroundColor: theme.buttons,
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#42307D",
}));

export {
  StyledAppbar,
  StyledToolbar,
  NavBox,
  LoginButton,
  SignupButton,
  StyledLink,
};
