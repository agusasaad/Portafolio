import { Box } from '@chakra-ui/react'
import Header from './Components/Header/Header'
import AboutMe from './Components/AboutMe/AboutMe'
import Project from './Components/Projects/Project'
import ContactMe from './Components/ContactMe/ContactMe'

// eslint-disable-next-line react/prop-types
const Home = ({home, project, about, contact}) => {
  return (
    <>
    <Box id='Home' as={"header"} ref={home}  w={'100%'} bgColor={'black'} display={'flex'} justifyContent={'center'} zIndex={10}>
        <Box ref={home} w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Header />
        </Box>
    </Box>
    <Box as={"main"} id="containerComponent" w={'100%'} bgColor={'black'} display={'flex'} flexDirection={'column'} alignItems={'center'} borderBottomRadius={{ base: "0px", lg: "30px" }} zIndex={10}>
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
    </>
  )
}

export default Home