import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import imgFormContact from "./../../../public/img/contact.jpg";

const FormContact = () => {
  const form = useRef();
  const toast = useToast();
  const [showSpinner, setShowSpinner] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setShowSpinner(true);

    emailjs
      .sendForm('default_service', 'template_4luuyes', form.current, {
        publicKey: "AvKV6TnFtizcS_CD1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast({
            title: "Email sent.",
            description: "Your message has been sent successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast({
            title: "Error.",
            description: "There was an error sending your message.",
            status: "error",
            duration: 5000,
            isClosable: true,
            colorScheme:'red'
          });
        }
      )
      .finally(() => {
        setShowSpinner(false);
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    gsap.set(["#Animation"], { y: 100, opacity: 0, visibility: "hidden" });
    gsap.to(["#Animation"], {
      opacity: 1,
      y: 0,
      visibility: "visible",
      ease: "power3.out",
      duration: 1.5,
      stagger: 0.2,
      delay: 0.5,
    });
  }, []);

  return (
    <Box
      w={"100%"}
      h={"auto"}
      bg={"black"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      py={{ base: "130px", lg: "200px" }}
      px={"20px"}
      zIndex={10}
    >
      <Flex
        maxW={"1200px"}
        display={"grid"}
        gridTemplateColumns={{ base: "auto", lg: "1fr 1fr" }}
        placeContent={"center"}
        gap={"30px"}
      >
        <Flex id="Animation">
          <Image
            src={imgFormContact}
            w={"600px"}
            h={{ base: "200px", lg: "600px" }}
            objectFit={"cover"}
            objectPosition={"68%"}
            borderRadius={{ base: "10px", lg: "30px" }}
          ></Image>
        </Flex>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          rowGap={"15px"}
        >
          <Flex flexDirection={"column"} id="Animation">
            <Text
              as={"h4"}
              color={"#9d8cf8"}
              fontSize={{ base: "md", xl: "xl" }}
              fontWeight={500}
            >
              Form Contact
            </Text>
            <Text
              as={"h3"}
              className="Titles"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight={400}
              color={"white"}
              letterSpacing={"-2px"}
              maxW={"600px"}
            >
              Contact Me
            </Text>
          </Flex>
          <Flex h={"auto"} flexDirection={"column"} rowGap={"20px"}>
            <FormControl as={"form"} ref={form} onSubmit={sendEmail}>
              <Stack id="Animation" spacing={1}>
                <FormLabel
                  color={"grey"}
                  fontSize={{ base: "md", lg: "xl" }}
                  fontWeight={500}
                >
                  Full Name
                </FormLabel>
                <Input
                  onChange={handleChange}
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  variant="unstyled"
                  bg={"#141414"}
                  border={"1px"}
                  borderColor={"#0f0f0f"}
                  color={"grey"}
                  fontWeight={500}
                  p={"10px"}
                  borderRadius={"10px"}
                  required
                />
                <FormLabel
                  color={"grey"}
                  fontSize={{ base: "md", lg: "xl" }}
                  fontWeight={500}
                >
                  Email address
                </FormLabel>
                <Input
                  onChange={handleChange}
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  variant="unstyled"
                  bg={"#141414"}
                  border={"1px"}
                  borderColor={"#0f0f0f"}
                  color={"grey"}
                  fontWeight={500}
                  p={"10px"}
                  borderRadius={"10px"}
                  required
                />
                <FormLabel
                  color={"grey"}
                  fontSize={{ base: "md", lg: "xl" }}
                  fontWeight={500}
                >
                  Message
                </FormLabel>
                <Textarea
                  onChange={handleChange}
                  value={formData.message}
                  name="message"
                  variant="unstyled"
                  h={"150px"}
                  bg={"#141414"}
                  border={"1px"}
                  borderColor={"#0f0f0f"}
                  color={"grey"}
                  fontWeight={500}
                  p={"10px"}
                  borderRadius={"10px"}
                  required
                />
                <Button
                  type="submit"
                  value="Send"
                  mt={"18px"}
                  fontWeight={600}
                  color={"black"}
                  size={"lg"}
                  borderRadius={"10px"}
                  _hover={{ bgColor: "#d6d6d6" }}
                  isLoading={showSpinner}
                  loadingText='Sending'
                >
                  Get in touch
                </Button>
              </Stack>
            </FormControl>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FormContact;
