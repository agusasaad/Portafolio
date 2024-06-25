import { Flex, Text } from "@chakra-ui/react";

const FooterText = () => {
  return (
    <Flex>
      <Text as={'p'} fontSize={{ base: "sm", xl: "xl" }} fontWeight={500} color={"grey"}>
        2024 Portfolio created with love by Agustin Asaad &#9996;.
      </Text>
    </Flex>
  );
};

export default FooterText;
