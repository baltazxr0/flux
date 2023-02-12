import { Button, Typography, FormControlLabel, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import { Container, EmailField, LoginBox, PasswordField } from "./signinStyle";
import { Google } from "@mui/icons-material";

function SignIn() {
  return (
    <Container>
      <LoginBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="a"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: "28px",
              letterSpacing: ".3rem",
              color: "#7F56D9",
              align: "center",
            }}
          >
            FLUX
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "30px",
              lineHeight: "38px",
              align: "center",
              color: "#101828",
              marginTop: "24px",
            }}
          >
            Log in to your account
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              align: "center",
              color: "#475467",
              marginTop: "12px",
            }}
          >
            Welcome back! Please enter your details.
          </Typography>
        </Box>
        <Box sx={{ marginTop: "32px" }}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#344054",
              marginBottom: "6px",
            }}
          >
            Email
          </Typography>
          <EmailField placeholder="Enter your email" />
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#344054",
              marginBottom: "6px",
            }}
          >
            Password
          </Typography>
          <PasswordField placeholder="Enter your password" />
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "24px",
          }}
        >
          <FormControlLabel
            control={<Checkbox sx={{ color: "#D0D5DD" }} />}
            label="Remember for 30 days"
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#344054",
            }}
          />
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#6941C6",
            }}
          >
            Forgot password
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "24px",
            gap: "16px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "360px",
              height: "44px",
              backgroundColor: "#7F56D9",
              color: "#FFFFFF",
            }}
          >
            Sign in
          </Button>
          <Button
            variant="outlined"
            startIcon={<Google />}
            disableElevation
            sx={{
              width: "360px",
              height: "44px",
              border: "1px solid #D0D5DD",
              borderRadius: "8px",
              color: "#344054",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            Sign in with Google
          </Button>
        </Box>
        <Box
          sx={{
            marginTop: "32px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
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
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#6941C6",
            }}
          >
            Sign up
          </Typography>
        </Box>
      </LoginBox>
    </Container>
  );
}

export default SignIn;
