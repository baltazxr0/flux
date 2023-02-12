import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import { InputBase } from "@mui/material";

const Container = styled("div")(({}) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "96px 32px 96px 32px",
  gap: "32px",
}));

const LoginBox = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 0,
}));

const EmailField = styled(InputBase)(({}) => ({
  border: "1px solid #D0D5DD",
  padding: "10px 14px 10px 14px",
  gap: "8px",
  borderRadius: "8px",
  width: "360px",
  height: "44px",
}));

const PasswordField = styled(InputBase)(({}) => ({
  border: "1px solid #D0D5DD",
  padding: "10px 14px 10px 14px",
  gap: "8px",
  borderRadius: "8px",
  width: "360px",
  height: "44px",
}));

export { Container, LoginBox, EmailField, PasswordField };
