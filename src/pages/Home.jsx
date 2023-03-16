import { Box, Center, VStack, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box
      minHeight="100vh"
      backgroundImage="url(https://st2.depositphotos.com/2632879/9628/i/600/depositphotos_96289540-stock-photo-fairy-tale-book.jpg)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="100%"
      
    >
      <Center>
        <VStack>
          <Heading
            as="h1"
            backgroundImage="conic-gradient(rgb(85, 60, 154), rgb(238, 75, 43), rgb(0, 194, 203), rgb(85, 60, 154))"
            backgroundClip="text"
            position="absolute"
            textAlign="center"
            left="50%"
            top="50%"
            transform="translate(-50%, -100%)"
          >
            Create your own Phonebook
          </Heading>
        </VStack>
      </Center>
    </Box>
  );
}
