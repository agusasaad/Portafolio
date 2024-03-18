import "./AboutMe.css";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import blackHole from './../../../public/img/fondoAbout2.jpg'

const AboutMe = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"auto"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          w={"100%"}
          h={"auto"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={'center'}
          alignItems={'center'}
          p={'200px 0px'}
        >
          <Box w={'100%'} display={'flex'} justifyContent={'center'} position={'relative'}>
            <Image src={blackHole} w={'500px'}></Image>
          </Box>
          <Box  w={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={2}>
          <Text
            border={"1px"}
            borderColor={"#5730CF"}
            color={"aliceblue"}
            borderRadius={"6px"}
            h={"30px"}
            w={"100px"}
            textAlign={"center"}
          >
            About Me
          </Text>
            <Text className="Font">Who I am.</Text>
            <Text
            color={"#353640"}
            fontSize={"xl"}
            letterSpacing={"-1px"}
            w={{base:'80%', md: '50%', lg: '50%', xl:'50%', '2xl':"50%"}}
            textAlign={'center'}
            >
              I am Agustín Asaad, from Córdoba, Argentina. Currently, I work as
              a full-stack web developer, although my specialization primarily
              lies in front-end development. With a solid foundation in both
              front-end and back-end technologies, I excel in creating
              attractive and user-friendly web applications. I am passionate
              about staying up-to-date with the latest industry trends and
              technologies to offer innovative solutions. <br/>Thanks for
              stopping by!
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default AboutMe;
