import { useRef } from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { LiaToolsSolid } from "react-icons/lia";
import { GrProjects } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import imgProfile from "../../../public/img/imgProfile.jpg";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Flex w={"100%"} justifyContent={'start'}>
        <Button ref={btnRef} onClick={onOpen} variant={"outline"} border={'none'} color={'aliceblue'} _hover={'none'}>
          <RxHamburgerMenu fontSize={'30px'}/>
        </Button>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"aliceblue"} />
          <DrawerHeader background={"#282828"}>
            <Flex
              justifyContent={"flex-start"}
              alignItems={"center"}
              justifyItems={"flex-start"}
              p={'10px'}
            >
              <Avatar src={imgProfile} w={'60px'} h={'60px'}/>
              <Box
                ml="3"
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                gap={1}
              >
                <Text fontWeight="bold" color={"aliceblue"}>
                  Agustin Asaad
                </Text>
                <Badge background={"#282828"} color={"aliceblue"}>
                  Full Stack Developer
                </Badge>
              </Box>
            </Flex>
          </DrawerHeader>
          <DrawerBody
            borderTop={"1px"}
            borderTopColor={"rgb(49, 49, 49)"}
            background={"#282828"}
            pt={"30px"}
            display={'flex'}
            flexDirection={'column'}
            gap={10}
          >
            <Flex flexDirection={"column"} alignItems={"start"} gap={6}>
              <Text color={'rgb(156, 156, 156)'}>Menu</Text>
              <Button
                bg={"transparent"}
                w={"100%"}
                color={"aliceblue"}
                size={"lg"}
                fontWeight={'100'}
                display={"flex"}
                justifyContent={"start"}
                gap={5}
                _hover={{bg: 'rgb(49, 49, 49)'}}
              >
                <AiOutlineUser />
                About Me
              </Button>

              <Button
                bg={"transparent"}
                w={"100%"}
                color={"aliceblue"}
                size={"lg"}
                fontWeight={'100'}
                display={"flex"}
                justifyContent={"start"}
                gap={5}
                _hover={{bg: 'rgb(49, 49, 49)'}}
              >
                <LiaToolsSolid />
                Skill
              </Button>

              <Button
                bg={"transparent"}
                w={"100%"}
                color={"aliceblue"}
                size={"lg"}
                fontWeight={'100'}
                display={"flex"}
                justifyContent={"start"}
                gap={5}
                _hover={{bg: 'rgb(49, 49, 49)'}}
              >
                <GrProjects />
                Projects
              </Button>

              <Button
                bg={"transparent"}
                w={"100%"}
                color={"aliceblue"}
                size={"lg"}
                fontWeight={'100'}
                display={"flex"}
                justifyContent={"start"}
                gap={5}
                _hover={{bg: 'rgb(49, 49, 49)'}}
              >
                <RiContactsLine />
                Contact
              </Button>
            </Flex>
            <Flex flexDirection={"column"} alignItems={"start"} gap={6}>
              <Text color={'rgb(156, 156, 156)'}>Social</Text>
              <Button
              bg={"transparent"}
              w={"100%"}
              color={"aliceblue"}
              size={"lg"}
              fontWeight={'100'}
              display={"flex"}
              justifyContent={"start"}
              gap={5}
              _hover={{bg: 'rgb(49, 49, 49)'}}
              ><FaLinkedin/>Linkedin</Button>

              <Button
              bg={"transparent"}
              w={"100%"}
              color={"aliceblue"}
              size={"lg"}
              fontWeight={'100'}
              display={"flex"}
              justifyContent={"start"}
              gap={5}
              _hover={{bg: 'rgb(49, 49, 49)'}}
              ><FaGithub/>GitHub</Button>

              <Button
              bg={"transparent"}
              w={"100%"}
              color={"aliceblue"}
              size={"lg"}
              fontWeight={'100'}
              display={"flex"}
              justifyContent={"start"}
              gap={5}
              _hover={{bg: 'rgb(49, 49, 49)'}}
              ><FaXTwitter/>Twitter</Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
