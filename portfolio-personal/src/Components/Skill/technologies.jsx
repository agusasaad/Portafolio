import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

// eslint-disable-next-line react-refresh/only-export-components
const Group1 = [
  { color: "#A557E1", icon: <FaBootstrap /> },
  { color: "#7ADCDC", icon: <SiChakraui /> },
  { color: "aliceblue", icon: <CgFigma /> },
  { color: "#2EA3F7", icon: <SiAdobephotoshop /> },
  { color: "#F79500", icon: <SiAdobeillustrator /> },
];
// eslint-disable-next-line react-refresh/only-export-components
const Group2 = [
  { color: "#FDF770", icon: <IoLogoJavascript /> },
  { color: "#F3885A", icon: <FaHtml5 /> },
  { color: "#3E9AE3", icon: <FaCss3Alt /> },
  { color: "#7CDAED", icon: <FaReact /> },
  { color: "#F5775B", icon: <FaGithub /> },
];
// eslint-disable-next-line react-refresh/only-export-components
const Group3 = [
  { color: "#6FA660", icon: <FaNodeJs /> },
  { color: "white", icon: <SiExpress /> },
  { color: "#31648C", icon: <BiLogoPostgresql /> },
  { color: "#00718B", icon: <SiMysql /> },
];

export const duplicatedGroup1 = [
  ...Group1,
  ...Group1,
  ...Group1,
  ...Group1,
  ...Group1,
  ...Group1,
];
export const duplicatedGroup2 = [
  ...Group2,
  ...Group2,
  ...Group2,
  ...Group2,
  ...Group2,
  ...Group2,
];
export const duplicatedGroup3 = [
  ...Group3,
  ...Group3,
  ...Group3,
  ...Group3,
  ...Group3,
  ...Group3,
];
