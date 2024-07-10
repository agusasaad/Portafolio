import { Box } from "@chakra-ui/react";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import Project from "./Components/Projects/Project";
import ContactMe from "./Components/ContactMe/ContactMe";
import { useEffect} from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Box
        id="Home"
        as={"header"}
        bg={"black"}
        w={"100%"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box
          w={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Header />
        </Box>
      </Box>
      <Box
        as={"main"}
        bg={"black"}
        w={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box
          as={"section"}
          w={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AboutMe />
        </Box>
        <Box
          as={"section"}
          w={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Project />
        </Box>
        <Box
          as={"section"}
          w={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
        >
          <ContactMe />
        </Box>
      </Box>
    </>
  );
};

export default Home;
