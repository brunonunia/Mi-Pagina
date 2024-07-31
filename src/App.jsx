import React from 'react';
import './App.css';
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react';

const App = () => {
  return (
    <Box bg="gray.900" color="white">
      <Box as="header" bg="gray.800" py={4}>
        <Flex as="nav" maxW="1200px" mx="auto" px={4} align="center" justify="space-between">
          <Box fontSize="xl" fontWeight="bold">Logo</Box>
          <HStack as="ul" spacing={4}>
            <Link as="li" href="#home">Home</Link>
            <Link as="li" href="#proyectos">Proyectos</Link>
            <Link as="li" href="#experiencia">Experiencia</Link>
            <Link as="li" href="#contacto">Contacto</Link>
          </HStack>
        </Flex>
      </Box>

      <Box as="main">
        <Box id="home" textAlign="center" py={10}>
          <Image borderRadius="full" boxSize="150px" src="img/avatar.PNG" alt="Avatar" mx="auto" />
          <Heading as="h1" size="2xl" mt={4}>
            Hago código y hago contenido <Text as="span" bgClip="text" bgGradient="linear(to-r, orange.400, red.400)">sobre eso!</Text>
          </Heading>
          <Text fontSize="xl" mt={4}>
            Soy un joven de 21 años, actualmente estudiando Ingenieria en Sistemas en la UTN FRC, estoy realizando un curso de programacion full-stack para asi poder amplicar mis conocimientos en los lenguajes de programacion.
          </Text>
          <HStack spacing={4} mt={6} justify="center">
            <Button as="a" href="#contacto" variant="outline" colorScheme="whiteAlpha">Ponerse en contacto</Button>
            <Button as="a" href="pdf/CV_Nunia_Bruno.pdf" variant="outline" colorScheme="whiteAlpha">Descargar CV</Button>
          </HStack>
        </Box>

        <Box id="proyectos" textAlign="center" py={10}>
          <Heading as="h2" size="xl" color="orange.400">Proyectos</Heading>
          <Flex wrap="wrap" justify="center" mt={6}>
            <Box width="200px" textAlign="center" mb={6}>
              <Link href="https://www.youtube.com/watch?v=TrZCk87a2y4&ab_channel=CreativeConstruction">
                <Image src="public/img/SketchUp-Logo.jpg" borderRadius="md" alt="SketchUp Project" />
              </Link>
              <Text mt={2}>Tutorial SketchUp</Text>
            </Box>
            <Box width="200px" textAlign="center" mb={6}>
              <Link href="https://www.youtube.com/watch?v=qzFKEt1JGwc&ab_channel=Algebraticos">
                <Image src="public/img/c++.png" borderRadius="md" alt="C++ Project" />
              </Link>
              <Text mt={2}>Tutorial C++</Text>
            </Box>
          </Flex>
        </Box>

        <Box id="experiencia" textAlign="center" py={10}>
          <Heading as="h2" size="xl" color="blue.400">Experiencia</Heading>
          <VStack spacing={8} mt={6}>
            <Box textAlign="left" width="full" maxW="800px">
              <Heading as="h3" size="md" ml={2}>Desarrollo de geolocalizador</Heading>
              <Text fontSize="sm" textAlign="right">Mar 2021 - Dic 2021</Text>
              <Text mt={2}>Durante el ultimo año del colegio secundario me encargue de realizar el codigo en C++ para poder utilizar un geolocalizador y asi poder ubicar a personas que por distintas circunstancias se escapan de su casa o se pierden.</Text>
            </Box>
            <Box textAlign="left" width="full" maxW="800px">
              <Heading as="h3" size="md" ml={2}>Diseño en Sketch Up</Heading>
              <Text fontSize="sm" textAlign="right">Dic 2020 - Dic 2021</Text>
              <Text mt={2}>Durante el desarrollo de este proyecto tuve que utilizar la aplicación Sketch Up para asi poder diseñar una caja contenedora del producto y evitar que se dañe por el agua.</Text>
            </Box>
            <Box textAlign="left" width="full" maxW="800px">
              <Heading as="h3" size="md" ml={2}>Programador Python</Heading>
              <Text fontSize="sm" textAlign="right">Mar 2023 - Presente</Text>
              <Text mt={2}>Desde mi ingreso a la facultad tuve la facilidad de entender el lenguajes y poder solucionar los problemas de una manera eficiente y rapida. Relice el juego llamado "Black Jack" en dicho lenguaje.</Text>
            </Box>
          </VStack>
        </Box>

        <Box id="contacto" bg="gray.800" py={10} textAlign="center">
          <Heading as="h2" size="xl">Contacto</Heading>
          <Text fontSize="lg" mt={4}>
            Joven de 21 años, actualmente estudiando Ingenieria en Sistemas en la UTN FRC, estoy realizando un curso de programacion full-stack para asi poder amplicar mis conocimientos en los lenguajes de programacion.
          </Text>
          <HStack justify="center" mt={6}>
            <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqSvzCHhwlLCZJFlZjkPdVQFnZgxqFxBhJHtVhSNWCVPRDzzFmCLGnjZVnbWqpTswMzxBB" isExternal>
              <Image boxSize="40px" src="public/img/email.png" alt="Email" />
            </Link>
            <Text fontWeight="bold">brunonunia@gmail.com</Text>
          </HStack>
          <HStack justify="center" mt={4}>
            <Link href="https://www.instagram.com/bruno_nunia/" isExternal>
              <Image boxSize="40px" src="public/img/instagram.png" alt="Instagram" />
            </Link>
            <Link href="https://www.linkedin.com/in/bruno-gabriel-nunia/" isExternal>
              <Image boxSize="40px" src="public/img/linkedin.png" alt="LinkedIn" />
            </Link>
            <Link href="https://www.facebook.com/bruno.nunia" isExternal>
              <Image boxSize="40px" src="public/img/facebook.png" alt="Facebook" />
            </Link>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
