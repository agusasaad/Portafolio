import { forwardRef, useState } from "react";
import { Box, Flex, Image, Text, Skeleton } from "@chakra-ui/react";
import { projects } from "./InfoProjects";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/display-name
const CardsProjects = forwardRef((_props, ref) => {
  const [loadedImages, setLoadedImages] = useState([]);

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
      gridTemplateColumns={{ base: "auto", md: "1fr 1fr" }}
      placeContent={"center"}
      gap={"30px 20px"}
    >
      {projects.map((project, index) => (
        <Link key={index} to={`/detail/${project.id}`}>
          <Flex
            flexDirection={"column"}
            cursor={"pointer"}
            rowGap={"10px"}
            _hover={{ ".projectImage": { transform: "scale(1.1)" } }}
          >
            {!loadedImages[index] && (
              <Skeleton height="500px" width="550px" borderRadius="10px" />
            )}
            <Flex overflow={"hidden"} borderRadius={"10px"}>
              <Image
                src={project.imageCard}
                w={"550px"}
                borderRadius={"10px"}
                onLoad={() => handleImageLoad(index)}
                display={loadedImages[index] ? "block" : "none"}
                className="projectImage"
                transition={"transform 0.3s ease-in-out"}
              />
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
                color={"grey"}
                fontSize={{ base: "md", lg: "lg" }}
                fontWeight={500}
              >
                {project.cargo}
              </Text>
            </Flex>
          </Flex>
        </Link>
      ))}
    </Box>
  );
});

export default CardsProjects;
