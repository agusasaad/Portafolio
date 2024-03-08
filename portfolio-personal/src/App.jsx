import "./App.css";
import { Flex } from "@chakra-ui/react";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import Skill from "./Components/Skill/skill";

function App() {
  return (
    <>
      <Flex w={"100%"} flexDirection={"column"} position={'relative'}>
        <NavBar />
        <Header />
        <Skill/>
      </Flex>
    </>
  );
}

export default App;
