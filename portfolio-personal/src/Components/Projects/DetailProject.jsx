import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { projects } from "./InfoProjects";
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { gsap } from "gsap";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const DetailProject = () => {
  const { id } = useParams();
  const findProject = projects.find(
    (element) => Number(element.id) === Number(id)
  );

  useEffect(() => {
    const animations = gsap.set(["#Animation"], {
      y: 100,
      opacity: 0,
      visibility: "hidden",
    });
    gsap.to(["#Animation"], {
      opacity: 1,
      y: 0,
      visibility: "visible",
      ease: "power2",
      duration: 1.3,
      stagger: 0.3,
      delay: 0.5,
    });

    return () => {
      animations.kill();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Box
      bg={"black"}
      w={"100%"}
      h={"auto"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      pt={{ base: "120px", md: "170px" }}
      pb={{ base: "25px", md: "100px" }}
      zIndex={1000}
    >
      <Flex
        w={{ sm: "75%", "2xl": "100%" }}
        maxW={"1100px"}
        flexDirection={"column"}
        gap={{ base: "20px", lg: "40px" }}
        mx={"15px"}
      >
        <Flex id="Animation" flexDirection={"column"} gap={"5px"}>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text
              as={"span"}
              fontSize={{ base: "lg", "2xl": "2xl" }}
              fontWeight={400}
              color={"#9e8dfc"}
            >
              {findProject.cargo}
            </Text>
            <Text
              as={"span"}
              fontSize={{ base: "sm", lg: "lg" }}
              fontWeight={400}
              color={"grey"}
            >
              {findProject.date}
            </Text>
          </Flex>
          <Text
            className="Titles"
            as={"h3"}
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight={400}
            color={"white"}
            letterSpacing={"-2px"}
          >
            {findProject.name}
          </Text>
          <Text
            as={"p"}
            color={"grey"}
            fontSize={{ base: "md", lg: "2xl" }}
            fontWeight={500}
          >
            {findProject.parrafo}
          </Text>
        </Flex>
        <Image
          id="Animation"
          as={"img"}
          alt={`Image ${findProject.name}`}
          src={findProject.imageModal}
          borderRadius={"10px"}
        />
        <Flex id="Animation" flexDirection={"column"} gap={"5px"}>
          <Text as={"h5"} color={"white"} fontSize={{ base: "xl", lg: "2xl" }}>
            Responsibilities
          </Text>
          <Text
            as={"p"}
            color={"grey"}
            fontSize={{ base: "md", lg: "2xl" }}
            fontWeight={500}
          >
            {findProject.parrafoDos}
          </Text>
        </Flex>
        <Flex id="Animation" flexDirection={"column"} gap={"5px"}>
          <Text as={"h5"} color={"white"} fontSize={{ base: "xl", lg: "2xl" }}>
            Technologies
          </Text>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
            rowGap={"20px"}
          >
            <Text
              as={"p"}
              color={"grey"}
              fontSize={{ base: "md", lg: "2xl" }}
              fontWeight={500}
            >
              {findProject.technologies}
            </Text>
            <Flex alignItems={"center"} gap={5}>
              <Link to={findProject.repository}>
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
              {findProject.web && (
                <Link to={findProject.web}>
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
              )}
            </Flex>
          </Flex>
        </Flex>
        <Image
          id="Animation"
          as={"img"}
          src={findProject.img}
          alt={`Image ${findProject.name}`}
          borderRadius={"10px"}
        />
        <Flex
          id="Animation"
          justifyContent={"space-between"}
          fontSize={{ base: "xl", lg: "3xl" }}
          fontWeight={500}
          color={"white"}
          letterSpacing={{ base: "-1px", lg: "-2px" }}
        >
          {findProject.id !== 1 ? (
            <Link
              to={`/detail/${findProject.id - 1}`}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <FaArrowLeft />
              <Text className="Titles">Back</Text>
            </Link>
          ) : (
            <Link
              to={`/detail/${findProject.id + 3}`}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <FaArrowLeft />
              <Text className="Titles">Back</Text>
            </Link>
          )}
          {findProject.id !== 4 ? (
            <Link
              to={`/detail/${findProject.id + 1}`}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Text className="Titles">Next</Text>
              <FaArrowRight />
            </Link>
          ) : (
            <Link
              to={`/detail/${findProject.id - 3}`}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Text className="Titles">Next</Text>
              <FaArrowRight />
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default DetailProject;
