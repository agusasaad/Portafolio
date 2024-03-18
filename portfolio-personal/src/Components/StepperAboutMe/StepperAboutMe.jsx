import "./StepperAboutMe.css";
import { Flex } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";

const StepperAboutMe = () => {
  return (
    <Flex
    opacity={'60%'}
      flexDirection={"column"}
      w={"100%"}
      alignItems={"center"}
      position={"absolute"}
      top={"57%"}
    >
      <div className="line"></div>
      <div className="circle">
        <span>
          <AiOutlineUser />
        </span>
      </div>
      {/* <Image src={AboutMepng} w={"300px"} mt={"30px"}></Image> */}
    </Flex>
  );
};

export default StepperAboutMe;
