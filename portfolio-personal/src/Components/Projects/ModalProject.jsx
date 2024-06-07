import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

const ModalProject = ({ isOpen, onClose, modalInfo }) => {
  const carouselSettings = {
    showArrows: true,
    showThumbs: false,
    showIndicators: false,
    infiniteLoop: true,
    autoPlay: false,
    interval: 3000,
    centerMode: true,
    emulateTouch: true,
    swipeable: true,
    centerSlidePercentage: 100,
  };

  return (
    <>
      <Modal
        motionPreset="slideInBottom"
        isOpen={isOpen}
        onClose={onClose}
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent
          bg={"black"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
        >
          <Flex
            w={"100%"}
            h={{ base: "150px", md: "200px", lg: "400px" }}
            bgImage={modalInfo.imageModal}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgPosition={"center"}
          ></Flex>
          <ModalHeader></ModalHeader>
          <ModalCloseButton
            bg={"black"}
            color={"white"}
            _hover={{ bg: "rgb(5, 5, 5)" }}
            _focus={{ boxShadow: "none" }}
            _active={{ bg: "rgb(5, 5, 5)", borderColor: "#171717" }}
            _after={"none"}
            outline={"none"}
            boxShadow={"none"}
            userSelect={"none"}
          />
          <ModalBody
            width={{ base: "100%", md: "80vw", lg: "70vw", xl: "45vw" }}
          >
            <Flex flexDir={"column"} gap={5}>
              <Flex flexDir={"column"}>
                <Text
                  as={"span"}
                  fontSize={{ base: "lg", "2xl": "xl" }}
                  fontWeight={400}
                  color={"#9e8dfc"}
                >
                  {modalInfo.cargo}
                </Text>
                <Text
                  as={"h2"}
                  fontSize={{ base: "5xl", "2xl": "7xl" }}
                  fontWeight={600}
                  color={"white"}
                  letterSpacing={"-2px"}
                >
                  {modalInfo.name}
                </Text>
                <Text
                  
                   as={"p"}
                   color={"#9B9DB4"}
                   fontSize={{base:'md', 'lg':"20px"}}
                   fontWeight={500}
                >
                  {modalInfo.parrafo}
                </Text>
              </Flex>
              <Flex flexDir={"column"} gap={7}>
                <Flex flexDir={"column"} gap={1}>
                  <Text as={"h5"} color={"white"} fontSize={"xl"}>
                    Responsibilities
                  </Text>
                  <Text
                     as={"p"}
                     color={"#9B9DB4"}
                     fontSize={{base:'md', 'lg':"20px"}}
                     fontWeight={500}
                  >
                    {modalInfo.parrafoDos}
                  </Text>
                </Flex>
                <Flex flexDir={"column"} gap={1}>
                  <Text as={"h5"} color={"white"} fontSize={"xl"}>
                    Technologies
                  </Text>
                  <Text
                     as={"p"}
                     color={"#9B9DB4"}
                     fontSize={{base:'md', 'lg':"20px"}}
                     fontWeight={500}
                  >
                    {modalInfo.technolgies}
                  </Text>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={5}>
                <Link to={modalInfo.repository}>
                  <Button
                    border={"1px"}
                    borderColor={"#171717"}
                    bg={"rgb(5, 5, 5)"}
                    display={"flex"}
                    gap={2}
                    color={"white"}
                    fontSize={"md"}
                    fontWeight={200}
                    _hover={{ bg: "white", color: "black", fontWeight: 600 }}
                    transition="all 0.3s ease-in-out"
                  >
                    <FaGithub style={{ fontSize: "20px" }} />
                    Repository
                  </Button>
                </Link>
                <Link to={modalInfo.web}>
                  <Button
                    border={"1px"}
                    borderColor={"#171717"}
                    bg={"rgb(5, 5, 5)"}
                    display={"flex"}
                    gap={2}
                    color={"white"}
                    fontSize={"md"}
                    fontWeight={200}
                    _hover={{ bg: "white", color: "black", fontWeight: 600 }}
                    transition="all 0.3s ease-in-out"
                  >
                    <CiLink style={{ fontSize: "25px" }} />
                    Web
                  </Button>
                </Link>
              </Flex>
              <Flex
                justifyContent="center"
                alignItems="center"
                width="100%"
              >
                <Box width="100%">
                  <Carousel {...carouselSettings}>
                    {modalInfo.ImageCarrucel?.map((image, index) => (
                      <Box key={index}>
                        <Image
                          src={image.img}
                          alt={`Image n${index}`}
                          maxH="80vh"
                          width="100%"
                          height="auto"
                          objectFit="cover"
                        />
                      </Box>
                    ))}
                  </Carousel>
                </Box>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter w={"100%"}>
            <Button
              bg={"white"}
              fontSize={"md"}
              fontWeight={600}
              _hover={{ bg: "white", color: "black" }}
              onClick={onClose}
            >
              Close Modal
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

ModalProject.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  modalInfo: PropTypes.object.isRequired,
};

export default ModalProject;
