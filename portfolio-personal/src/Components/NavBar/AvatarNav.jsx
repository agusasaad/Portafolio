import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import imgProfile from "../../../public/img/imgProfile.jpg";
const AvatarNav = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(circleRef.current, {
      duration: 1,
      opacity: 0.4,
      ease: "power1.inOut",
    }).to(circleRef.current, { duration: 1, opacity: 1, ease: "power1.inOut" });
  }, []);

  return (
    <>
      <Flex
        p={"10px"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        justifyItems={"flex-start"}
      >
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
        <Box
          ml="3"
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Text
            fontWeight={500}
            color={"aliceblue"}
            fontSize={{ base: "sm", xl: "17px" }}
          >
            Agustin Asaad
          </Text>
          <Link to={"https://www.linkedin.com/in/agustin-asaad/"}>
            <Flex alignItems={"center"} gap={1}>
              <Box
                w={"10px"}
                h={"10px"}
                borderRadius={"50%"}
                bg={"#47AC53"}
                ref={circleRef}
              ></Box>
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
