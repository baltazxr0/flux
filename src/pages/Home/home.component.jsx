import CourseList from "../../components/CourseList/courseList.component";
import { styled } from "@mui/system";
import Hero from "../../components/Hero/hero.component";
import { useState, useEffect } from "react";
import { courseList } from "../../data/coursesData";
const StyledContainer = styled("div")`
  background-color: #f9f5ff;
  padding-bottom: 20px;
`;

function Home() {
  const [courses, setCourses] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredCourse, setFilteredCourses] = useState(courses);

  useEffect(() => {
    setCourses(courseList);
  }, []);

  useEffect(() => {
    const newFilteredCourses = courses.filter((course) => {
      return course.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredCourses(newFilteredCourses);
  }, [courses, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <StyledContainer>
      <Hero onChangeHandler={onSearchChange} />
      <CourseList courses={filteredCourse} />
    </StyledContainer>
  );
}

export default Home;
