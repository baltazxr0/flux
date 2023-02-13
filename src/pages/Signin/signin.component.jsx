import { Typography, Checkbox } from "@mui/material";
import {
  BottomBox,
  ButtonsContainer,
  CheckboxContainer,
  CompanyName,
  Container,
  Email,
  EmailContainer,
  EmailField,
  ForgotPassword,
  GoogleLoginButton,
  LoginBox,
  LoginButton,
  LoginText,
  Password,
  PasswordContainer,
  PasswordField,
  RememberCheckbox,
  SignupLink,
  TextBox,
  WelcomeText,
} from "./signinStyle";
import { Google } from "@mui/icons-material";

function SignIn() {
  return (
    <Container>
      <LoginBox>
        <TextBox>
          <CompanyName variant="h6" component="a">
            FLUX
          </CompanyName>
          <LoginText>Log in to your account</LoginText>
          <WelcomeText>Welcome back! Please enter your details.</WelcomeText>
        </TextBox>
        <EmailContainer>
          <Email>Email</Email>
          <EmailField placeholder="Enter your email" />
        </EmailContainer>
        <PasswordContainer>
          <Password>Password</Password>
          <PasswordField placeholder="Enter your password" />
        </PasswordContainer>
        <CheckboxContainer>
          <RememberCheckbox
            control={<Checkbox sx={{ color: "#D0D5DD" }} />}
            label="Remember for 30 days"
          />
          <ForgotPassword>Forgot password</ForgotPassword>
        </CheckboxContainer>
        <ButtonsContainer>
          <LoginButton variant="contained">Sign in</LoginButton>
          <GoogleLoginButton
            variant="outlined"
            startIcon={<Google />}
            disableElevation
          >
            Sign in with Google
          </GoogleLoginButton>
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
            Don't have an account?
          </Typography>
          <SignupLink to="/auth/signup">Sign up</SignupLink>
        </BottomBox>
      </LoginBox>
    </Container>
  );
}

export default SignIn;
