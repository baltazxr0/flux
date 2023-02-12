// import Carousel from "../../components/Carousel/carousel.component";
import { Container } from "@mui/material";
import CourseList from "../../components/CourseList/courseList.component";
import { styled } from "@mui/system";

const StyledContainer = styled("div")`
  padding: 30px;
`;

function Home() {
  return (
    <StyledContainer>
      {/* <Carousel /> */}
      <CourseList />
    </StyledContainer>
  );
}

export default Home;
