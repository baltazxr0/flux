import { Search } from "@mui/icons-material";
import { InputAdornment, InputBase, Typography } from "@mui/material";
import { Container, SearchInput } from "./heroStyle";

function Hero({ onChangeHandler }) {
  return (
    <Container>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "48px",
          color: "#42307D",
          lineHeight: "60px",
          textAlign: "center",
        }}
      >
        Start your learning journey!
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "30px",
          textAlign: "center",
          color: "#6941C6",
          marginTop: "24px",
        }}
      >
        The latest courses, technologies, and resources.
      </Typography>
      <SearchInput
        onChange={onChangeHandler}
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <Search sx={{ color: "#667085" }} />
          </InputAdornment>
        }
      />
    </Container>
  );
}
export default Hero;
