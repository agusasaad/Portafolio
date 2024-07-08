import { Box, Flex} from "@chakra-ui/react";
import SpinninText from "./SpinninText";
import Collaborations from "./Collaborations";
import NavigateAndLink from "./NavigateAndLink";
import FooterText from "./FooterText";

// eslint-disable-next-line react/prop-types
const Footer = () => {
  return (
    <Box
      as={"footer"}
      w={'100%'}
      h={"auto"}
      bg="white"
      py={{ base: "10px", lg: "50px" }}
      display={"flex"}
      justifyContent={'center'}
    >
      <Flex maxW={'1100px'} display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      alignItems={"center"}>
        <Flex
          w={"100%"}
          h={'auto'}
          p={"20px"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"start"}
          gap={"50px"}
        >
          <Collaborations />
          <NavigateAndLink/>
        </Flex>
        <Flex
          w={"100%"}
          h={'auto'}
          justifyContent={"space-between"}
          alignItems={"end"}
          p={"20px"}
        >
          <FooterText />
          <SpinninText text="THANK YOU ✦ FOR YOUR VISIT ✦ " />
        </Flex>
      </Flex>
    </Box>
  );
};
export default Footer;
