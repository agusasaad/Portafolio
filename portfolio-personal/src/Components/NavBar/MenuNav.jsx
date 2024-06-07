import { useRef } from "react";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
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
import { IoMdArrowDropdown } from "react-icons/io";

const MenuNav = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();


  const showNavBar = useBreakpointValue({
    base: true,
    xs: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    full: false,
  });

  
  return (
    <>
      {showNavBar && (
        <Flex  h={'auto'} pt={'10px'}>
          <Button
            ref={btnRef}
            onClick={onOpen}
            variant={"outline"}
            border={"none"}
            color={"aliceblue"}
            _hover={"none"}
          >
            <RxHamburgerMenu fontSize={"35px"} />
          </Button>
        </Flex>
      )}
      {!showNavBar && (
        <Flex  justifyContent={"end"} gap={2} p={'15px 15px'}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<IoMdArrowDropdown />}
              bg={'transparent'}
              color={"white"}
              _hover={"none"}
            >
              Social
            </MenuButton>
            <MenuList
              size={"xs"}
              bg={"#171717"}
              border={"1px"}
              borderColor={"#232323"}
            >
              <MenuItem gap={5} bg={"#171717"} color={"white"}>
                <FaLinkedin />
                Linkedin
              </MenuItem>
              <MenuItem gap={5} bg={"#171717"} color={"white"}>
                <FaGithub />
                GitHub
              </MenuItem>
              <MenuItem gap={5} bg={"#171717"} color={"white"}>
                <FaXTwitter />
                Twitter
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<IoMdArrowDropdown />}
              bg={'transparent'}
              color={"white"}
              _hover={{ bg: "black", color: "white"}}
            >
              Menu
            </MenuButton>
            <MenuList bg={"#171717"} border={"none"}>
              <MenuItem gap={5} bg={"#171717"} color={"white"}>
                <AiOutlineUser />
                About Me
              </MenuItem>
              <MenuItem gap={5} bg={"#171717"} color={"white"}>
                <LiaToolsSolid />
                Skill
              </MenuItem>
              <MenuItem gap={5} bg={"#171717"} color={"white"}>
                <GrProjects />
                Projects
              </MenuItem>
              <MenuItem gap={5} bg={"#171717"} color={"white"}>
                <RiContactsLine />
                Contact Me
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      )}

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{ base: "xl", sm: "xl", md: "xs", lg: "xs", xl: "xs" }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"aliceblue"} />
          <DrawerHeader bg={"#171717"}>
            <Flex
              justifyContent={"flex-start"}
              alignItems={"center"}
              justifyItems={"flex-start"}
              p={"10px"}
            >
              <Avatar src={imgProfile} w={"60px"} h={"60px"} />
              <Box
                ml="3"
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Text
                  fontWeight={500}
                  color={"aliceblue"}
                  fontSize={{ base: "sm", xl: "17px" }}
                >
                  Agustin Asaad
                </Text>
                <Text color={"aliceblue"} fontSize={"sm"} fontWeight={300}>
                  Front End Developer
                </Text>
              </Box>
            </Flex>
          </DrawerHeader>
          <DrawerBody
            borderTop={"1px"}
            borderTopColor={"rgb(49, 49, 49)"}
            bg={"#171717"}
            pt={"30px"}
            display={"flex"}
            flexDirection={"column"}
            gap={10}
          >
            <Flex flexDirection={"column"} alignItems={"start"} gap={6}>
              <Text color={"rgb(156, 156, 156)"}>Menu</Text>
              <Button
                bg={"transparent"}
                w={"100%"}
                color={"#959499"}
                size={"lg"}
                fontWeight={500}
                display={"flex"}
                justifyContent={"start"}
                gap={5}
                _hover={{ bg: "rgb(49, 49, 49)" }}
              >
                <AiOutlineUser />
                About Me
              </Button>

              <Button
                bg={"transparent"}
                w={"100%"}
                color={"#959499"}
                size={"lg"}
                fontWeight={500}
                display={"flex"}
                justifyContent={"start"}
                gap={5}
                _hover={{ bg: "rgb(49, 49, 49)" }}
              >
                <LiaToolsSolid />
                Skill
              </Button>

              <Button
                bg={"transparent"}
                w={"100%"}
                color={"#959499"}
                size={"lg"}
                fontWeight={500}
                display={"flex"}
                justifyContent={"start"}
                gap={5}
                _hover={{ bg: "rgb(49, 49, 49)" }}
              >
                <GrProjects />
                Projects
              </Button>

              <Button
                bg={"transparent"}
                w={"100%"}
                color={"#959499"}
                size={"lg"}
                fontWeight={500}
                display={"flex"}
                justifyContent={"start"}
                gap={5}
                _hover={{ bg: "rgb(49, 49, 49)" }}
              >
                <RiContactsLine />
                Contact
              </Button>
            </Flex>
            <Flex flexDirection={"column"} alignItems={"start"} gap={6}>
              <Text color={"rgb(156, 156, 156)"}>Social</Text>
              <Button
                bg={"transparent"}
                w={"100%"}
                color={"#959499"}
                size={"lg"}
                fontWeight={500}
                display={"flex"}
                justifyContent={"start"}
                gap={5}
                _hover={{ bg: "rgb(49, 49, 49)" }}
              >
                <FaLinkedin />
                Linkedin
              </Button>

              <Button
                bg={"transparent"}
                w={"100%"}
                color={"#959499"}
                size={"lg"}
                fontWeight={500}
                display={"flex"}
                justifyContent={"start"}
                gap={5}
                _hover={{ bg: "rgb(49, 49, 49)" }}
              >
                <FaGithub />
                GitHub
              </Button>

              <Button
                bg={"transparent"}
                w={"100%"}
                color={"#959499"}
                size={"lg"}
                fontWeight={500}
                display={"flex"}
                justifyContent={"start"}
                gap={5}
                _hover={{ bg: "rgb(49, 49, 49)" }}
              >
                <FaXTwitter />
                Twitter
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuNav;
