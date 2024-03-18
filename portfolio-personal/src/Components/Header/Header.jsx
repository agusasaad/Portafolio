import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { MdOutlineFileDownload } from "react-icons/md";
import "./Header.css";
import Title from "./../../../public/img/Title.png";

const Header = () => {
  return (
    <Flex id="backgroundImage" w={"100%"} h={"950px"} flexDirection={"row"} justifyContent={'center'}>
      <Flex
        opacity={'80%'}
        boxSize="xl"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignContent={"center"}
        w={"auto"}
        h={"auto"}
      >
        <Box>
        <Text
          color={"aliceblue"}
          fontSize={"2xl"}
          fontWeight={"200"}
          w={"auto"}
          textAlign={"center"}
        >
          {"Hello! I'm Agustin"}
        </Text>
        </Box>
        <Box m={'0px 30px'}>
          <Image src={Title} alt="Dan Abramov" w={"700px"}/>
        </Box>
        <Box m={'0px 30px'}>
        <Text
          color={"rgb(110, 110, 110)"}
          fontSize={"20px"}
          letterSpacing={"-1px"}
          w={"100%"}
          textAlign={"center"}
        >
          Welcome to my personal portfolio! Here, you will find a compilation of <br/>
          my projects, achievements, and skills. From web designs <br/> to innovative 
          solutions.
        </Text>
        </Box>
        <Flex mt={'30px'} w={'auto'} justifyContent={'center'}>
        <Button 
        border={'1px'} 
        borderColor={'#5632D1'}
        bg={'transparent'}
        color={'aliceblue'}
        fontSize={'md'}
        _hover={'none'}
        >Download cv <MdOutlineFileDownload/></Button>
        </Flex>
      </Flex>
    </Flex>
    
  );
};

export default Header;
