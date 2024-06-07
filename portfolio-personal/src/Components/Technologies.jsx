import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { PiFileHtmlLight } from "react-icons/pi";
import { PiFileCssLight } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";

const icons = [
     {icon: <PiFileHtmlLight/>},
     {icon: <PiFileCssLight/>},
    {icon: <IoLogoJavascript/>},
    {icon: <BiLogoTypescript/>},
    {icon: <FaReact/>},
    {icon: <FaBootstrap/>},
    {icon: <SiChakraui/>},
    {icon: <IoLogoNodejs/>},
    {icon: <SiExpress/>},
    {icon: <SiPostgresql/>},
    {icon: <GrMysql/>},
    {icon: <FaFigma/>},
    {icon: <DiIllustrator/>},
    {icon: <DiPhotoshop/>},
]

export const duplicateIcons = [...icons, ...icons, ...icons]