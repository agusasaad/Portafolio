import { Box } from '@chakra-ui/react'
import Header from './Header/Header'
import AboutMe from './AboutMe/AboutMe'
import Project from './Projects/Project'
import ContactMe from './ContactMe/ContactMe'

// eslint-disable-next-line react/prop-types
const Home = ({ home, project, about, contact }) => {
  return (
  <>
    <Box w={'100%'} id='Home' display={'flex'} flexDirection={'column'} alignItems={'center'} zIndex={10}>
          <Box as={"header"} ref={home} w={'100%'} bgColor={'black'} display={'flex'} justifyContent={'center'}>
            <Header />
          </Box>
          <Box as={"main"} id='containerComponent' w={'100%'} bgColor={'black'} display={'flex'} flexDirection={'column'} alignItems={'center'} borderBottomRadius={{ base: "0px", lg: "30px" }}>
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
    </>
  )
}

export default Home