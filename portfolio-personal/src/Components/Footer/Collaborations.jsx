import { Button, Flex, Text } from "@chakra-ui/react";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Collaborations = () => {
  return (
    <Flex flexDirection={"column"} alignItems={"start"} gap={"20px"}>
      <Flex flexDirection={"column"} gap={"5px"}>
        <Text
          color={"#9d8cf8"}
          fontSize={{ base: "lg", xl: "2xl" }}
          fontWeight={500}
        >
          Collaborations
        </Text>
        <Text
          className="Titles"
          maxW={{ base: "400px", xl: "500px" }}
          fontSize={{ base: "4xl", lg: "5xl" }}
          fontWeight={500}
          color={"black"}
          letterSpacing={"-3px"}
          style={{ textWrap: "balance" }}
        >
          Let&apos;s start creating together
        </Text>
      </Flex>
      <Link to={"mailto:agusasaad1099@hotmail.com"}>
        <Button
          bg={"black"}
          color={"white"}
          fontSize={"20px"}
          fontWeight={400}
          borderRadius={"30px"}
          p={"30px"}
          display={'flex'}
          alignItems={'center'}
          gap={'3px'}
          _hover={{ color: "grey" }}
        >
          <Text>Email me</Text>
          <HiMiniArrowUpRight style={{ fontSize: "25px" }} />
        </Button>
      </Link>
    </Flex>
  );
};

export default Collaborations;
