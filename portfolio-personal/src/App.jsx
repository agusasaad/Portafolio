import { Box, Flex } from "@chakra-ui/react";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import AvatarNav from "./Components/AvatarNav/AvatarNav";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"auto"}
        flexDirection={"column"}
        alignContent={"center"}
        bg={"black"}
        position={'relative'}
      >
        <Box display={'flex'} position={'absolute'} top={'15px'} w={'100%'}>
          <AvatarNav />
          <NavBar />
        </Box>
        <Header />
        <AboutMe />
        <AboutMe />
      </Flex>
    </>
  );
}

export default App;
