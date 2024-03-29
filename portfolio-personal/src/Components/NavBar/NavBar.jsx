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
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const elementRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top", // Comienza la animación cuando el centro del elemento alcanza la parte superior de la ventana gráfica
        end: "bottom", // Termina la animación cuando el elemento alcanza la parte superior de la ventana gráfica
        scrub: true,
        toggleActions: "restart pause reverse pause",
      },
    });

    tl.to(elementRef.current, {
      opacity: 0,
      duration: 1,
    });
  }, []);

  
  return (
    <>
      <Flex w={"100%"} justifyContent={'end'} useRef={elementRef}>
        <Button ref={btnRef} onClick={onOpen} variant={"outline"} border={'none'} color={'aliceblue'} _hover={'none'}>
          <RxHamburgerMenu fontSize={'30px'}/>
        </Button>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{base:'xl', sm:'xl', md:'xs', lg:'xs', xl:'xs'}}
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
              >
                <Text fontWeight={500} color={"aliceblue"} fontSize={{base:'sm',xl:"17px"}}>
                  Agustin Asaad
                </Text>
                <Text color={"aliceblue"} fontSize={'sm'} fontWeight={300}>
                  Front End Developer
                </Text>
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
