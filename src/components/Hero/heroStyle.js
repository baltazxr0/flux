import styled from "@emotion/styled";
import { InputBase } from "@mui/material";

const Container = styled("div")(({}) => ({
  backgroundColor: "#F9F5FF",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "96px 0px",
  width: "100%",
}));

const SearchInput = styled(InputBase)({
  width: "320px",
  height: "48px",
  borderRadius: "8px",
  backgroundColor: "#FFFFFF",
  gap: "8px",
  padding: "12px 14px",
  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
  marginTop: "40px",
  color: "#667085",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
});

export { Container, SearchInput };
