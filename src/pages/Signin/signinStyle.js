import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import { Button, FormControlLabel, InputBase, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled("div")({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "96px 32px 96px 32px",
  gap: "32px",
});

const LoginBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 0,
});

const TextBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const CompanyName = styled(Typography)({
  fontFamily: "monospace",
  fontWeight: 700,
  fontSize: "28px",
  letterSpacing: ".3rem",
  color: "#7F56D9",
  align: "center",
});

const LoginText = styled(Typography)({
  fontWeight: 600,
  fontSize: "30px",
  lineHeight: "38px",
  align: "center",
  color: "#101828",
  marginTop: "24px",
});

const WelcomeText = styled(Typography)({
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  align: "center",
  color: "#475467",
  marginTop: "12px",
});

const EmailContainer = styled(Box)({
  marginTop: "32px",
});

const PasswordContainer = styled(Box)({
  marginTop: "20px",
});

const EmailField = styled(InputBase)({
  border: "1px solid #D0D5DD",
  padding: "10px 14px 10px 14px",
  gap: "8px",
  borderRadius: "8px",
  width: "360px",
  height: "44px",
});

const PasswordField = styled(InputBase)({
  border: "1px solid #D0D5DD",
  padding: "10px 14px 10px 14px",
  gap: "8px",
  borderRadius: "8px",
  width: "360px",
  height: "44px",
});

const Email = styled(Typography)({
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#344054",
  marginBottom: "6px",
});

const Password = styled(Typography)({
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#344054",
  marginBottom: "6px",
});

const CheckboxContainer = styled(Box)({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "24px",
});

const RememberCheckbox = styled(FormControlLabel)({
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#344054",
});

const ForgotPassword = styled(Typography)({
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#6941C6",
});

const SignupLink = styled(Link)({
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#6941C6",
  textDecoration: "none",
});

const BottomBox = styled(Box)({
  marginTop: "32px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
});

const ButtonsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginTop: "24px",
  gap: "16px",
});

const LoginButton = styled(Button)({
  width: "360px",
  height: "44px",
  backgroundColor: "#7F56D9",
  color: "#FFFFFF",
});

const GoogleLoginButton = styled(Button)({
  width: "360px",
  height: "44px",
  border: "1px solid #D0D5DD",
  borderRadius: "8px",
  color: "#344054",
  fontWeight: 600,
  fontSize: "16px",
});

export {
  Container,
  LoginBox,
  TextBox,
  CompanyName,
  LoginText,
  WelcomeText,
  EmailContainer,
  PasswordContainer,
  EmailField,
  PasswordField,
  Email,
  Password,
  CheckboxContainer,
  RememberCheckbox,
  ForgotPassword,
  SignupLink,
  BottomBox,
  ButtonsContainer,
  LoginButton,
  GoogleLoginButton,
};
