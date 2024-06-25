import { Box, Flex} from "@chakra-ui/react";
import SpinninText from "./SpinninText";
import Collaborations from "./Collaborations";
import NavigateAndLink from "./NavigateAndLink";
import FooterText from "./FooterText";

// eslint-disable-next-line react/prop-types
const Footer = ({ home, project, about, contact }) => {
  return (
    <Box
      as={"footer"}
      w={{ base: "95%", lg: "80%" }}
      h={"auto"}
      bg="white"
      py={{ base: "10px", lg: "50px" }}
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"sticky"}
      bottom={0}
    >
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
        <NavigateAndLink home={home} project={project} about={about} contact={contact} />
      </Flex>
      <Flex
        w={"100%"}
        h={'auto'}
        justifyContent={"space-between"}
        alignItems={"end"}
        p={"20px"}
      >
        <FooterText />
        <SpinninText text="THANK YOU ✦ FOR VISITING ✦ " />
      </Flex>
    </Box>
  );
};
export default Footer;
