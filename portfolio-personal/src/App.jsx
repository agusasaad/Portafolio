import { Box } from "@chakra-ui/react";
import { Route, Routes} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Home";
import DetailProject from "./Components/Projects/DetailProject";
import FormContact from "./Components/ContactMe/FormContact";
import "./index.css";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <Box id="container" w={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:id" element={<DetailProject/>}></Route>
          <Route path="/contact" element={<FormContact/>}></Route>     
        </Routes> 
        <Footer/>
    </Box>
  );
}

export default App;


