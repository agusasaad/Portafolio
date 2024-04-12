import { Flex } from "@chakra-ui/react";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skill from "./Components/Skill/Skill";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"auto"}
        flexDirection={"column"}
        alignContent={"center"}
        bg={"black"}
        position={"relative"}
      >
        <NavBar/>
        <Header />
        <AboutMe />
        <Skill />
      </Flex>
    </>
  );
}

export default App;
