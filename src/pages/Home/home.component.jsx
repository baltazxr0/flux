// import Carousel from "../../components/Carousel/carousel.component";
import { Container } from "@mui/material";
import CourseList from "../../components/CourseList/courseList.component";
import { styled } from "@mui/system";
import Hero from "../../components/Hero/hero.component";

const StyledContainer = styled("div")`
  background-color: #f9f5ff;
  padding-bottom: 20px;
`;

function Home() {
  return (
    <StyledContainer>
      <Hero />
      <CourseList />
    </StyledContainer>
  );
}

export default Home;
