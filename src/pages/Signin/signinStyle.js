import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

const Container = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "row",
  position: "relative",
  minHeight: "100vh",
}));

const LoginBox = styled(Box)(({}) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  width: "50%",
  alignItems: "center",
  justifyContent: "center",
}));

const UsernameField = styled(TextField)(({}) => ({
  width: 200,
}));

const EmailField = styled(TextField)(({}) => ({
  width: 200,
}));

const PasswordField = styled(TextField)(({}) => ({
  width: 200,
}));

const RepeatPasswordField = styled(TextField)(({}) => ({
  width: 200,
}));

export {
  Container,
  LoginBox,
  UsernameField,
  EmailField,
  PasswordField,
  RepeatPasswordField,
};
