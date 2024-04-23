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
        <Box id="borderAvatar" border={'2px'} p={'5px'} borderRadius={'50%'} borderColor={'#704aef'}>
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
          <Flex alignItems={'center'} gap={1}>
            <Box w={'10px'} h={'10px'} borderRadius={'50%'} bg={'#47AC53'}></Box> 
            <Text background={"transparent"} fontSize={{base:'xs', xl:"md"}} color={"#8c8c8c"} fontWeight={500}>
            Available for work
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default AvatarNav;
