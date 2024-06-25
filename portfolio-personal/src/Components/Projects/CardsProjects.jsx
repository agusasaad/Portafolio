import { forwardRef, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import { Projects } from "./InfoProjects";
import ModalProject from "./ModalProject";

// eslint-disable-next-line react/display-name
const CardsProjects = forwardRef((_props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalInfo, setModalInfo] = useState("");
  const [loadedImages, setLoadedImages] = useState([]);

  const openModal = (infoModal) => {
    setModalInfo(infoModal);
    onOpen();
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const newLoadedImages = [...prev];
      newLoadedImages[index] = true;
      return newLoadedImages;
    });
  };

  return (
    <Box
      ref={ref}
      className="cardProjects"
      w={"100%"}
      maxW={"1100px"}
      display={"grid"}
      gridTemplateColumns={{ base: "auto", lg: "1fr 1fr" }}
      gap={"30px 20px"}
    >
      {Projects.map((project, index) => (
        <Flex
          key={index}
          flexDirection={"column"}
          rowGap={"10px"}
          onClick={() => openModal(project)}
          cursor={"pointer"}
        >
          {!loadedImages[index] && (
            <Skeleton height="500px" width="550px" borderRadius="10px" />
          )}
          <Flex flexDirection={"column"} rowGap={"10px"}>
            <Flex overflow={"hidden"} borderRadius={"10px"}>
              <Image
                as={'img'}
                borderRadius={"10px"}
                src={project.imageCard}
                w={{ base: "100%", xl: "550px" }}
                transition={"transform 0.3s ease-in-out"}
                transform={"scale(1)"}
                _hover={{ transform: "scale(1.1)" }}
                onLoad={() => handleImageLoad(index)}
                display={loadedImages[index] ? "block" : "none"}
              ></Image>
            </Flex>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text
                className="Titles"
                as={"h4"}
                color={"white"}
                fontSize={{ base: "xl", lg: "2xl" }}
                letterSpacing={"-1px"}
              >
                {project.name}
              </Text>
              <Text
                as={"p"}
                color={"#9B9DB4"}
                fontSize={{ base: "md", lg: "lg" }}
                fontWeight={500}
              >
                {project.cargo}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      ))}

      <ModalProject
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        modalInfo={modalInfo}
      />
    </Box>
  );
});

export default CardsProjects;

