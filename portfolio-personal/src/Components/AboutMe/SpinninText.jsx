import { Box, Flex, Image, Text, keyframes } from "@chakra-ui/react";
import profile from './../../../public/img/BYN.png'
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const SpinninText = forwardRef((_props, ref) => {
  const text = "FRONTEND DEVELOPER - FRONTEND DEVELOPER - ";
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
    <Flex position={'relative'} ref={ref}>
        <Box
        w={"200px"}
        h={"200px"}
        display={'flex'}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"50%"}
        position={"relative"}
        animation={`${spin} 50s linear infinite`}
        >
        <Flex position={"absolute"} w={"100%"} h={"100%"}>
            {text.split("").map((letter, index) => (
            <Text
                as={"span"}
                key={index}
                position={"absolute"}
                top={0}
                left={"50%"}
                transform={`rotate(${deg * index}deg)`}
                transformOrigin={"0 100px"}
                fontSize={"12px"}
                fontWeight={700}
                color={"grey"}
                p={"2px"}
            >
                {letter}
            </Text>
            ))}
        </Flex>
        </Box>
        <Image src={profile} position={'absolute'} w={'140px'} top={'25px'} left={'30px'}></Image>

    </Flex>
  );
});

export default SpinninText;
