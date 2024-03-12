import "./App.css";
import { Flex } from "@chakra-ui/react";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import ButtonDarkMode from "./Components/ButtonDarkMode/ButtonDarkMode";

function App() {
  return (
    <div>
      <Flex w={"100%"} flexDirection={"column"} position={'relative'} bg={'black'}>
        <NavBar />
        <ButtonDarkMode/>
        <Header />
        <AboutMe/>
      </Flex>
    </div>
  );
}

export default App;
