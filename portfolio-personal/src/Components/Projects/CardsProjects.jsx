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
      id="cardProjects"
      w={"100%"}
      ref={ref}
      display={"flex"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      columnGap={"30px"}
      rowGap={"30px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {Projects.map((project, index) => (
        <Flex
          key={index}
          flexDirection={"column"}
          rowGap={"10px"}
          onClick={() => openModal(project)}
          cursor={"pointer"}
          opacity={"100%"}
        >
          {!loadedImages[index] && (
            <Skeleton height="500px" width="550px" borderRadius="10px" />
          )}
          <Image
            src={project.imageCard}
            w={{xl:"550px", '2xl':'550px'}}
            h={"auto"}
            borderRadius={"10px"}
            onLoad={() => handleImageLoad(index)}
            display={loadedImages[index] ? "block" : "none"}
          />
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text
              as={"h4"}
              color={"white"}
              fontSize={{ base: "xl", lg: "2xl" }}
            >
              {project.name}
            </Text>
            <Text
              as={"p"}
              color={"#9B9DB4"}
              fontSize={{ base: "md", lg: "20px" }}
              fontWeight={500}
            >
              {project.cargo}
            </Text>
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
