import { Box } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import Project from "./Components/Projects/Project";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import "./index.css";
import AboutMe from "./Components/AboutMe/AboutMe";

function App() {
  //Ref Animaciones
  const containerApp = useRef(null);
  const continerComponent = useRef(null);

  //Ref Navegaciones
  const home = useRef(null);
  const project = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  //Animaciones GSAP
  useEffect(() => {
    const isMobile = window.innerWidth <= 820;

    if (!isMobile) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.set([continerComponent.current, "#NavBar"], { width: "90%" });
      gsap.from([continerComponent.current, "#NavBar"], {
        width: "100%",
        ease: 'none',
        scrollTrigger: {
          trigger: containerApp.current,
          start: "center+=700 top",
          end: "bottom top",
          scrub: true,
          // markers:true
        },
      });
    }
  }, []);

  return (
    <Box ref={containerApp} w={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box w={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} zIndex={10}>
        <Box as={"header"} w={'100%'} bgColor={'black'} display={'flex'} justifyContent={'center'} ref={home}>
          <NavBar home={home} project={project} about={about} contact={contact} />
          <Header />
        </Box>
        <Box as={"main"} ref={continerComponent} w={'100%'} bgColor={'black'} display={'flex'} flexDirection={'column'} alignItems={'center'} borderBottomRadius={{ base: "0px", lg: "30px" }}>
          <Box as={"section"} ref={about} w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <AboutMe />
          </Box>
          <Box as={"section"} ref={project} w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Project />
          </Box>
          <Box as={"section"} ref={contact} w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} overflow={'hidden'}>
            <ContactMe />
          </Box>
        </Box>
      </Box>
      <Footer home={home} project={project} about={about} contact={contact} />
    </Box>
  );
}

export default App;

