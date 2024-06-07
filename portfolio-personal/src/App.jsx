import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Project from "./Components/Projects/Project";
import "./index.css";


function App() {
  return (
    <Box
      className="App"
      w={"100%"}
      h={"auto"}
      bg={"black"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      position={'relative'}
    >
        <NavBar />
        <Header/>
        <Project/>
        {/* <AboutMe/> */}
        <ContactMe />
        <Footer />
    </Box>
  );
}

export default App;
