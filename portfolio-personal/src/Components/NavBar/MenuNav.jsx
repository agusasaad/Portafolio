import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
const MenuNav = ({ home, project, about, contact }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const showNavBar = useBreakpointValue({
    base: true,
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: false,
    full: false,
  });

  const handleScroll = (ref) => {
    onClose();
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const navigate = [
    { name: "Home", ref: home },
    { name: "About me", ref: about },
    { name: "Projects", ref: project },
    { name: "Contact", ref: contact },
  ];
  const hoverStyles = {
    "& .link-item:first-of-type": {
      transform: "translateY(-26px)",
    },
    "& .link-item:nth-of-type(2)": {
      transform: "translateY(-26px)",
    },
  };

  return (
    <>
      {showNavBar && (
        <Flex h={"auto"} p={"25px 5px"}>
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
        <Flex
          p={"30px 30px"}
          w={"30%"}
          justifyContent={"end"}
          gap={"40px"}
          fontWeight={500}
          color={"white"}
          fontSize={"md"}
        >
          {navigate.map((link, index) => (
            <Flex
              key={index}
              as={"ul"}
              cursor={"pointer"}
              onClick={() => handleScroll(link.ref)}
            >
              <Flex
                as={"li"}
                height={"26px"}
                flexDirection={"column"}
                overflow={"hidden"}
                position={"relative"}
                _hover={hoverStyles}
              >
                <Text
                  as={"span"}
                  className="link-item"
                  transition={"transform 0.3s ease"}
                >
                  {link.name}
                </Text>
                <Text
                  as={"span"}
                  className="link-item"
                  transition={"transform 0.3s ease"}
                  color={"#cccccc"}
                  position={"absolute"}
                  top={"26px"}
                  width={"100%"}
                >
                  {link.name}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      )}

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xl"}
      >
        <DrawerOverlay />
        <DrawerContent
          bg={"transparent"}
          bgGradient={
            "linear-gradient(rgb(2, 2, 2) 0%, rgba(2, 2, 2, 0.992) 11.7896%, rgba(2, 2, 2, 0.97) 21.3837%, rgba(2, 2, 2, 0.93) 29.12%, rgba(2, 2, 2, 0.88) 35.3363%, rgba(2, 2, 2, 0.82) 40.3704%, rgba(2, 2, 2, 0.75) 44.56%, rgba(2, 2, 2, 0.67) 48.243%, rgba(2, 2, 2, 0.59) 51.757%, rgba(2, 2, 2, 0.5) 55.44%, rgba(2, 2, 2, 0.416) 59.6296%, rgba(2, 2, 2, 0.325) 64.6637%, rgba(2, 2, 2, 0.24) 70.88%, rgba(2, 2, 2, 0.153) 78.6163%, rgba(2, 2, 2, 0.075) 88.2104%, rgba(2, 2, 2, 0) 100%);"
          }
        >
          <DrawerCloseButton color={"aliceblue"} fontSize={"lg"} mt={"10px"} />
          <DrawerBody
            bg={"transparent"}
            p={"70px 40px"}
            display={"flex"}
            flexDirection={"column"}
            gap={10}
          >
            <Flex flexDirection={"column"} alignItems={"start"} gap={"20px"}>
              {navigate.map((link, index) => (
                <Text
                  key={index}
                  as={"li"}
                  bg={"transparent"}
                  color={"white"}
                  fontSize={"3xl"}
                  fontWeight={500}
                  listStyleType={"none"}
                  cursor={"pointer"}
                  transition={"0.3s ease-in-out"}
                  _hover={{ fontSize: "4xl" }}
                  onClick={() => handleScroll(link.ref)}
                >
                  {link.name}
                </Text>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuNav;
