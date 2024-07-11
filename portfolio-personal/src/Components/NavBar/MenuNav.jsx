import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MenuNav = ({ showMenu, setShowMenu }) => {
  const navigate = [
    { name: "Home", navigate: "/" },
    { name: "Projects", navigate: "/detail/1" },
    { name: "Contact Me", navigate: "/contact" },
  ];

  const hoverStyles = {
    "& .link-item:first-of-type": {
      transform: "translateY(-27px)",
    },
    "& .link-item:nth-of-type(2)": {
      transform: "translateY(-27px)",
    },
  };

  return (
    <>
      <Box
        display={{ base: showMenu ? "flex" : "none", lg: "flex" }}
        p={"30px 30px"}
        w={"min-content"}
        h={{ base: "100vh", lg: "auto" }}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={{ base: "start", lg: "space-around" }}
        gap={"30px"}
        fontWeight={500}
        color={"white"}
        fontSize={{ base: "xl", lg: "md" }}
      >
        {navigate.map((link, index) => (
          <Link
            key={index}
            to={link.navigate}
            style={{ cursor: "pointer" }}
            onClick={() => setShowMenu(false)}
          >
            <Flex
              as={"li"}
              w={"max-content"}
              height={"27px"}
              flexDirection={"column"}
              overflow={"hidden"}
              position={"relative"}
              _hover={hoverStyles}
            >
              <Text
                as={"span"}
                className="link-item"
                transition={"transform 0.3s ease"}
                color={"white"}
              >
                {link.name}
              </Text>
              <Text
                as={"span"}
                className="link-item"
                transition={"transform 0.3s ease"}
                position={"absolute"}
                top={"26px"}
                color={"#9d8cf8"}
                width={"100%"}
              >
                {link.name}
              </Text>
            </Flex>
          </Link>
        ))}
      </Box>
    </>
  );
};

export default MenuNav;
