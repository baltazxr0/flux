import { Typography } from "@mui/material";
import { Container } from "./heroStyle";

function Hero() {
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
        Courses and mentoring
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
    </Container>
  );
}
export default Hero;
