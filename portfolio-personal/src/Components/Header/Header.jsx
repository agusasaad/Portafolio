import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Skill from "../Skill";
import background from "./../../../public/img/FondoAbout.jpg";
import "./Header.css";

const Header = () => {
  const subtitleRef = useRef(null);
  const titleHeaderRef = useRef(null);
  const descriptionHeaderRef = useRef(null);
  const carrucelRef = useRef(null);

  useEffect(() => {
    gsap.set(
      [
        subtitleRef.current,
        titleHeaderRef.current,
        descriptionHeaderRef.current,
        carrucelRef.current,
      ],
      { y: 100, opacity: 0 }
    );

    gsap.to(
      [
        subtitleRef.current,
        titleHeaderRef.current,
        descriptionHeaderRef.current,
        carrucelRef.current,
      ],
      {
        opacity: 1,
        y: 0,
        ease: "power3",
        duration: 1.5,
        stagger: 0.3,
      }
    );
  }, []);

  return (
    <Box
      w={"100%"}
      maxWidth={'1700px'}
      h={"auto"}
      overflow={'visible'}
      bgImage={background}
      bgSize={"cover"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      placeContent={'center'}
      display={"flex"}
      flex={'0 0 auto'}
      flexFlow={'column'}
      justifyContent={"center"}
      alignItems={"center"}
      py={{ base: "200px", md: "300px" }}
      zIndex={1}
    >
      <Flex
        w={'100%'}
        flexDirection={"column"}
        alignItems={"center"}
        rowGap={"20px"}
      >
        <Text
          ref={subtitleRef}
          color={"white"}
          fontSize={{ base: "lg", xl: "xl", "2xl": "2xl" }}
          fontWeight={400}
          w={"auto"}
          lineHeight={"none"}
        >
          Hi I&apos;m Agustin &#128075;
        </Text>
        <Flex
          ref={titleHeaderRef}
          flexDirection="column"
          alignItems="center"
          lineHeight="none"
        >
          <Text
            id="fontTitle"
            className="gradientText"
            fontSize={{
              base: "85px",
              sm: "120px",
              md:"140px",
              lg:'150px',
              "2xl": "150px",
            }}
            letterSpacing={{
              base: "-6px",
              sm: "-8px",
              md: "-9px",
              lg: "-10px",
              xl: "-10px",
            }}
          >
            FrontEnd
          </Text>
          <Text
            id="fontTitle"
            fontSize={{
              base: "45px",
              sm: "55px",
              md: "60px",
              lg:'65px',
              "2xl": "70px",
            }}
            letterSpacing={{
              base: "-4px",
              sm: "-4px",
              md: "-5px",
              lg: "-6px",
              "2xl": "-5px",
            }}
            color="white"
          >
            Developer.
          </Text>
        </Flex>
        <Text
          ref={descriptionHeaderRef}
          as={"p"}
          color={"#9B9DB4"}
          fontSize={{ base: "md", lg: "xl" }}
          fontWeight={500}
          textAlign={"center"}
          mx={'25px'}
          mb={'50px'}
          maxW={'510px'}
          minW={'200px'}
        >
          Full Stack Developer from Córdoba, Argentina. I specialize
          in Front end development, with experience in creating efficient and
          visually attractive user interfaces.
        </Text>
        <Skill ref={carrucelRef} />
      </Flex>
    </Box>
  );
};

export default Header;
