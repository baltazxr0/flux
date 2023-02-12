import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Container = styled(Box)(({}) => ({
  height: "100vh",
}));

function AuthLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default AuthLayout;
