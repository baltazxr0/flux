import { Button, Typography } from "@mui/material";
import {
  BottomBox,
  ButtonsContainer,
  CompanyName,
  Container,
  EmailContainer,
  EmailField,
  GoogleSignupButton,
  LoginBox,
  LoginLink,
  OrContainer,
  OrText,
  PasswordContainer,
  PasswordField,
  SignupText,
  TextBox,
  WelcomeText,
} from "./signupStyle";
import { Google } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { Apple } from "@mui/icons-material";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Container>
      <LoginBox>
        <TextBox>
          <CompanyName variant="h6" component="a">
            FLUX
          </CompanyName>
          <SignupText>Create an account</SignupText>
          <WelcomeText>Start your learning journey!</WelcomeText>
        </TextBox>
        <EmailContainer>
          <EmailField placeholder="Enter your email" />
        </EmailContainer>
        <PasswordContainer>
          <PasswordField placeholder="Enter your password" />
        </PasswordContainer>
        <Button
          variant="contained"
          sx={{
            width: "360px",
            height: "44px",
            backgroundColor: "#7F56D9",
            color: "#FFFFFF",
            marginTop: "16px",
          }}
        >
          Get started
        </Button>
        <OrContainer>
          <OrText>OR</OrText>
        </OrContainer>
        <ButtonsContainer>
          <GoogleSignupButton
            variant="outlined"
            startIcon={<Google />}
            disableElevation
          >
            Sign up with Google
          </GoogleSignupButton>
        </ButtonsContainer>
        <BottomBox>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#475467",
            }}
          >
            Already have an account?
          </Typography>
          <LoginLink to="/auth/signin">Login</LoginLink>
        </BottomBox>
      </LoginBox>
    </Container>
  );
}

export default SignUp;
