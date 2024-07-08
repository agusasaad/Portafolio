import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import imgProfile from "../../../public/img/imgProfile.jpg";
const AvatarNav = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.to(circleRef.current, {
      scale: 2.5,
      opacity: 0,
      ease:'power1',
      repeat:-1,
      duration:1.3
    });
  }, []);

  return (
    <>
      <Flex
        p={"20px 10px"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        justifyItems={"flex-start"}
      >
        <Link to={'./'} title="Home">
          <Box
            id="borderAvatar"
            border={"2px"}
            p={"5px"}
            borderRadius={"50%"}
            borderColor={"#704aef"}
          >
            <Avatar
              src={imgProfile}
              w={{ base: "40px", xl: "50px" }}
              h={{ base: "40px", xl: "50px" }}
            />
          </Box>
        </Link>
        <Box
          ml="3"
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Text
            fontWeight={500}
            color={"white"}
            fontSize={{ base: "sm", xl: "17px" }}
          >
            Agustin Asaad
          </Text>
          <Link to={"https://www.linkedin.com/in/agustin-asaad/"} title="Link to my LinkedIn profile.">
            <Flex alignItems={"center"} gap={1}>
              <Flex position={"relative"}>
                <Box
                  w={"7px"}
                  h={"7px"}
                  borderRadius={"50%"}
                  bg={"#47AC53"}
                ></Box>
                <Box
                  w={"7px"}
                  h={"7px"}
                  borderRadius={"50%"}
                  bg={"#47AC53"}
                  position={"absolute"}
                  ref={circleRef}
                ></Box>
              </Flex>
              <Text
                background={"transparent"}
                fontSize={{ base: "xs", xl: "md" }}
                color={"#8c8c8c"}
                fontWeight={500}
                _hover={{ color: "white" }}
                transition="color 0.7s ease, transform 0.7s ease"
              >
                Available for work
              </Text>
            </Flex>
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default AvatarNav;
