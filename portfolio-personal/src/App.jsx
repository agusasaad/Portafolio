import "./App.css";
import { Flex } from "@chakra-ui/react";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Flex w={"100%"} flexDirection={"column"} position={'relative'} border={'1px'}>
        <NavBar />
        <Header />
      </Flex>
    </>
  );
}

export default App;
