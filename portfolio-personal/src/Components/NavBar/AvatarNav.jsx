import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import imgProfile from "../../../public/img/imgProfile.jpg";

const AvatarNav = () => {
  return (
    <>
      <Flex
        p={'10px'}
        justifyContent={"flex-start"}
        alignItems={"center"}
        justifyItems={"flex-start"}
      >
        <Box border={'2px'} p={'5px'} borderRadius={'50%'} borderColor={'#704aef'}>
          <Avatar src={imgProfile} w={{base:'40px' ,xl:"50px"}} h={{base:'40px' ,xl:"50px"}} />
        </Box>
        <Box
          ml="3"
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Text fontWeight={500} color={"aliceblue"} fontSize={{base:'sm',xl:"17px"}}>
            Agustin Asaad
          </Text>
          <Text background={"transparent"} fontSize={{base:'xs', xl:"md"}} color={"grey"} fontWeight={500}>
            Front End Developer
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default AvatarNav;
