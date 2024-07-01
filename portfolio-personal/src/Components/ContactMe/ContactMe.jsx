import {
  Box,
  Flex,
  Text
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const ContactMe = () => {
  const carrucelContactMe = useRef(null);

  const contactMeRepet = [
    "Contact Me",
    "Contact Me",
    "Contact Me",
    "Contact Me",
    "Contact Me",
    "Contact Me",
    "Contact Me",
    "Contact Me",
  ];

  useEffect(() => {
    gsap.to(carrucelContactMe.current, {
      x:
        (carrucelContactMe.current.getBoundingClientRect().width -
          window.innerWidth) *
        -1,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const onMouseEnter = (e) => {
    const li = e.currentTarget.querySelectorAll("li");
    li.forEach((span) => (span.style.color = "#9d8cf8"));
  };

  const onMouseLeave = (e) => {
    const li = e.currentTarget.querySelectorAll("li");
    li.forEach((span) => (span.style.color = "white"));
  };

  return (
    <Box
      h={"auto"}
      w={"100%"}
      overflow={"hidden"}
      my={{ base: "50px", lg: "100px" }}
      pt={"50px"}
    >
      <Flex w={"100%"} justifyContent={"flex-start"} alignItems={"center"}>
        <Link
          ref={carrucelContactMe}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={{ display: "flex", flexDirection: "row", cursor: "pointer" }}
          to={'/contact'}
        >
          {contactMeRepet.map((element, index) => (
            <Flex key={index}>
              <ul style={{ display: "flex", alignItems: "center" }}>
                <Text
                  as={"li"}
                  listStyleType="none"
                  color={"white"}
                  fontSize={{ base: "70px", lg: "150px" }}
                  fontWeight={500}
                  whiteSpace={"nowrap"}
                  letterSpacing={"-1px"}
                >
                  {element}
                </Text>
                {index < contactMeRepet.length - 1 && (
                  <svg
                    width="150"
                    height="20"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z"
                      fill="#9d8cf8"
                    ></path>
                  </svg>
                )}
              </ul>
            </Flex>
          ))}
        </Link>
      </Flex>
    </Box>
  );
};

export default ContactMe;