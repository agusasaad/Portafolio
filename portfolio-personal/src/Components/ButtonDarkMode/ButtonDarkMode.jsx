import { Flex, Switch, Text } from "@chakra-ui/react";

const ButtonDarkMode = () => {
  return (
    <>
      <Flex
      w={'auto'}
      display={'flex'}
      alignItems={'center'}
      mr={'10px'}
      >
        <Text color={"rgb(110, 110, 110)"} w={'100px'}>Dark Mode</Text>
        <Switch size="lg" colorScheme="purple" />
      </Flex>
    </>
  );
};

export default ButtonDarkMode;
