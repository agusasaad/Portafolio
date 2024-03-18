import { Flex, Switch, Text } from "@chakra-ui/react";

const ButtonDarkMode = () => {
  return (
    <>
      <Flex
        w={"auto"}
        justifyContent={"end"}
        alignItems={"center"}
        position={'fixed'}
        top={"20px"}
        right={"20px"}
        gap={2}
      >
        <Text color={"rgb(110, 110, 110)"}>Dark Mode</Text>
        <Switch size="lg" colorScheme="purple" />
      </Flex>
    </>
  );
};

export default ButtonDarkMode;
