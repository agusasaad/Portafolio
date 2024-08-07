import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { navigate, links } from "../links";

const NavigateAndLink = () => {

  return (
    <Flex
      w={"300px"}
      display={"flex"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      alignItems={{ base: "center", lg: "start" }}
      gap={"20px"}
    >
      <Flex
        flexDirection={{ base: "row", lg: "column" }}
        fontSize={{ base: "lg", xl: "2xl" }}
        fontWeight={500}
        letterSpacing={"-1px"}
        gap={"20px"}
      >
        {navigate.map((links, index) => (
          <Link key={index} to={links.navigates}>
            <Flex
              h={{ base: "27px", xl: "36px" }}
              flexDirection={"column"}
              alignItems={"flex-start"}
              overflow={"hidden"}
              position={"relative"}
              _hover={{
                "& .link-item:first-of-type": {
                  transform: "translateY(-36px)",
                },
                "& .link-item:nth-of-type(2)": {
                  transform: "translateY(-36px)",
                },
              }}
            >
              <Text
                as={"li"}
                className="Titles link-item"
                fontSize={{ base: "lg", xl: "2xl" }}
                fontWeight={500}
                letterSpacing={"-1px"}
                listStyleType={"none"}
                color={"#232323"}
                transition={"transform 0.3s ease"}
              >
                {links.name}
              </Text>
              <Text
                className="Titles link-item"
                as={"li"}
                fontSize={{ base: "lg", xl: "2xl" }}
                fontWeight={500}
                letterSpacing={"-1px"}
                listStyleType={"none"}
                color={"#232323"}
                position={"absolute"}
                top={"36px"}
                width={"100%"}
                transition={"transform 0.3s ease"}
              >
                {links.name}
              </Text>
            </Flex>
          </Link>
        ))}
      </Flex>
      <Flex flexDirection={{ base: "row", lg: "column" }} gap={"20px"}>
        {links.map((links, index) => (
          <Link key={index} to={links.url}>
         <Flex
              h={{ base: "27px", xl: "36px" }}
              flexDirection={"column"}
              alignItems={"flex-start"}
              overflow={"hidden"}
              position={"relative"}
              _hover={{
                "& .link-item:first-of-type": {
                  transform: "translateY(-36px)",
                },
                "& .link-item:nth-of-type(2)": {
                  transform: "translateY(-36px)",
                },
              }}
            >
              <Text
                className="Titles link-item"
                as={"li"}
                fontSize={{ base: "lg", xl: "2xl" }}
                fontWeight={500}
                letterSpacing={"-1px"}
                listStyleType={"none"}
                color={"#232323"}
                transition={"transform 0.3s ease"}
              >
                {links.name}
              </Text>
              <Text
                className="Titles link-item"
                as={"li"}
                fontSize={{ base: "lg", xl: "2xl" }}
                fontWeight={500}
                letterSpacing={"-1px"}
                listStyleType={"none"}
                color={"#232323"}
                position={"absolute"}
                top={"36px"}
                width={"100%"}
                transition={"transform 0.3s ease"}
              >
                {links.name}
              </Text>
            </Flex>
        </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default NavigateAndLink;
