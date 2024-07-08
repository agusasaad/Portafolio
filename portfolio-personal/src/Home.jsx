import { Box } from '@chakra-ui/react'
import Header from './Components/Header/Header'
import AboutMe from './Components/AboutMe/AboutMe'
import Project from './Components/Projects/Project'
import ContactMe from './Components/ContactMe/ContactMe'

const Home = () => {
  return (
    <>
    <Box id='Home' as={"header"}  w={'100%'} bgColor={'black'} display={'flex'} justifyContent={'center'} zIndex={10}>
        <Box w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Header />
        </Box>
    </Box>
    <Box as={"main"} id="containerComponent" w={'100%'} bgColor={'black'} display={'flex'} flexDirection={'column'} alignItems={'center'} zIndex={10}>
        <Box as={"section"} w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <AboutMe />
        </Box>
        <Box as={"section"} w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Project />
        </Box>
        <Box as={"section"} w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} overflow={'hidden'}>
          <ContactMe />
        </Box>
    </Box>
    </>
  )
}

export default Home