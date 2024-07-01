import { Box } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Home";
import DetailProject from "./Components/Projects/DetailProject";
import Footer from "./Components/Footer/Footer";
import "./index.css";
import FormContact from "./Components/FormContact";

function App() {
  const location = useLocation()

  //Navegaciones
  const home = useRef(null);
  const about = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);
  
  //Ref Animaciones
  const containerApp = useRef(null);

  //Animaciones GSAP
  useEffect(() => {
    const isMobile = window.innerWidth <= 820;

    if (!isMobile) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(["#containerComponent", "#NavBar"], { width: "90%" });
      gsap.from(["#containerComponent", "#NavBar"], {
        width: "100%",
        ease: 'none',
        scrollTrigger: {
          trigger: containerApp.current,
          start: "center+=700 top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    
  }, []);


  return (
    <Box ref={containerApp} w={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <NavBar home={home} project={project} about={about} contact={contact}/>
        <Routes>
          <Route path="/" element={<Home home={home} project={project} about={about} contact={contact}/>}></Route>
          <Route path="/detail/:id" element={<DetailProject/>}></Route>
          <Route path="/contact" element={<FormContact/>}></Route>     
        </Routes> 
        <Footer home={home} project={project} about={about} contact={contact} />
    </Box>
  );
}

export default App;


