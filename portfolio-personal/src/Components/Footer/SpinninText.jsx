import { Box, Flex, Text, keyframes } from "@chakra-ui/react";
import PropTypes from "prop-types";

const SpinninText = ({ text }) => {
  const length = text.length;
  const deg = 360 / length;

  const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

  return (
    <Box
      w={"150px"}
      h={"150px"}
      bg={"yellow"}
      display={{ base: "none", lg: "flex" }}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"50%"}
      position={"relative"}
      animation={`${spin} 50s linear infinite`}
    >
      <Flex position={"absolute"} w={"100%"} h={"100%"}>
        {text.split("").map((letter, index) => (
          <Text
          className="Titles"
            as={"span"}
            key={index}
            position={"absolute"}
            top={0}
            left={"50%"}
            transform={`rotate(${deg * index}deg)`}
            transformOrigin={"0 75px"}
            fontSize={"12px"}
            fontWeight={600}
            p={'2px'}
          >
            {letter}
          </Text>
        ))}
      </Flex>
    </Box>
  );
};

SpinninText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SpinninText;
