import { Box, Center, VStack, Heading} from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Center>
        <VStack>
          <Heading
            as="h1"
            backgroundImage="conic-gradient(rgb(85, 60, 154), rgb(238, 75, 43), rgb(0, 194, 203), rgb(85, 60, 154))"
            color="transparent"
            backgroundClip="text"
            textAlign="center"
          >
            Create your own Phonebook
            
          </Heading>
        </VStack>
      </Center>
    </Box>
  );
}
