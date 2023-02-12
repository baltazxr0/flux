import { Box } from "@mui/system";
import {
  Container,
  EmailField,
  LoginBox,
  PasswordField,
  RepeatPasswordField,
  UsernameField,
} from "./signinStyle";

function SignIn() {
  return (
    <Container>
      <LoginBox>
        <UsernameField />
        <EmailField />
        <PasswordField />
        <RepeatPasswordField />
      </LoginBox>
      <Box sx={{ width: "50%" }}>photo</Box>
    </Container>
  );
}

export default SignIn;
