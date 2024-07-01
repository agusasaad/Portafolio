import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Skill from "./Skill";
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
      { y: 100, opacity: 0, visibility: "hidden" }
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
        visibility: "visible",
        ease: "power3.out",
        duration: 1.5,
        stagger: 0.3,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <Box
      w={"100%"}
      h={"auto"}
      maxWidth={"1700px"}
      bgImage={background}
      bgSize={"cover"}
      bgPosition={"50% 50%"}
      bgRepeat={"no-repeat"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={{base:'180px', md:'250px'}}
      pb={'120px'}
    >
      <Flex
        w={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
        rowGap={"20px"}
      >
        <Text
          as={"span"}
          ref={subtitleRef}
          color={"white"}
          fontSize={{ base: "lg", xl: "xl", "2xl": "2xl" }}
          fontWeight={400}
          w={"auto"}
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
            as={"h1"}
            id="fontTitle"
            className="gradientText"
            fontSize={{
              base: "85px",
              sm: "120px",
              md: "140px",
              lg: "150px",
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
            as={"h2"}
            id="fontTitle"
            fontSize={{
              base: "45px",
              sm: "55px",
              md: "60px",
              lg: "65px",
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
          color={"grey"}
          fontSize={{ base: "md", lg: "xl" }}
          fontWeight={500}
          textAlign={"center"}
          mx={"25px"}
          mb={"50px"}
          maxW={"510px"}
          minW={"200px"}
        >
          Web Developer from Córdoba, Argentina. I specialize in Front
          end development, with experience in creating efficient and visually
          attractive user interfaces.
        </Text>
        <Skill ref={carrucelRef} />
      </Flex>
    </Box>
  );
};

export default Header;
