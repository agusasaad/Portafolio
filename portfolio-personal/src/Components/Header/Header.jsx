import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { MdOutlineFileDownload } from "react-icons/md";
import "./Header.css";
import Title from "./../../../public/img/Title.png";

const Header = () => {
  return (
    <Flex id="backgroundImage" w={"100%"} h={"1100"}>
      <Box
        boxSize="xl"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        h={"100%"}
      >
        <Text
          color={"aliceblue"}
          fontSize={"2xl"}
          fontWeight={"200"}
          w={"35%"}
          textAlign={"center"}
        >
          {"Hello! I'm Agustin Asaad"}
        </Text>
        <Image src={Title} alt="Dan Abramov" w={"700px"}/>
        <Text
          color={"rgb(110, 110, 110)"}
          fontSize={"20px"}
          letterSpacing={"-1px"}
          w={"35%"}
          textAlign={"center"}
        >
          Welcome to my personal portfolio! Here, you will find a compilation of
          my projects, achievements, and skills. From web designs to innovative
          solutions.
        </Text>
        <Flex mt={'20px'} w={'20%'} justifyContent={'center'} >
            <Text fontSize={'xl'} color={'#6942ff'} display={'flex'} alignItems={'center'}>
              Download cv
            </Text>
        <Button 
        border={'none'}
        bg={'transparent'}
        color={'aliceblue'}
        fontSize={'3xl'}
        _hover={'none'}
        ><MdOutlineFileDownload/></Button>
        </Flex>
      </Box>
    </Flex>
    
  );
};

export default Header;
