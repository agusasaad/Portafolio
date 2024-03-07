import {  Flex, Heading, Text } from "@chakra-ui/react"
import './Header.css'

const Header = () => {
  return (
    <Flex id="backgroundImage" w={'100%'}p={'100px'} justifyContent={'center'} direction={'column'} gap={100}>
      <Flex justifyContent={'center'} direction={'column'} h={'900px'} p={'50px'}>
        <Heading as={'h1'} color={'rgb(182, 182, 182)'} fontSize='7xl'>Im Agustin Asaad</Heading>
        <Text color={'rgb(46, 46, 46)'} fontSize={'4xl'}>Full Stack Developer</Text>
      </Flex>

      <Flex direction={'column'} justifyContent={'start'} alignItems={'center'} w={'100%'} h={'900px'}>
          <Heading color={'rgb(182, 182, 182)'} fontSize='7xl'>About me</Heading>
          <Text  width={'50%'} textAlign={'center'} color={'rgb(46, 46, 46)'} fontSize={'xl'}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta ad, quasi nam enim accusantium inventore quisquam, iure sunt aspernatur eum optio, ullam at? Aliquam odio fuga mollitia quaerat suscipit.</Text>
      </Flex>
    </Flex>
  )
}

export default Header