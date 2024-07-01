import { Box, Text } from '@chakra-ui/react'
import { useEffect } from 'react';

const FormContact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box w={'100%'} h={'100vh'} bg={'black'} display={'flex'} justifyContent={'center'} alignItems={'center'} zIndex={10}>
        <Text fontSize={'9xl'} color={'white'} className='Title'>Formulario de contacto</Text>
    </Box>
  )
}

export default FormContact