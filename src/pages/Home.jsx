import { Box, Center, VStack, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box
      minHeight="100vh"
      backgroundImage="url(https://st3.depositphotos.com/16122460/36330/i/600/depositphotos_363308862-stock-photo-magic-light-emanating-open-old.jpg)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      width="100%"
      backgroundSize="cover"
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
