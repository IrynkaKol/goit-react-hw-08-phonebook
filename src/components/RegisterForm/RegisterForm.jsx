import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
//import { Form, Label } from './RegisterForm.styled';

import {
  Box,
  Heading,
  VStack,
  Card,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  CardBody,
  Center,
} from '@chakra-ui/react';
import { PhonebookLogo } from 'phonebook-logo';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box>
      <Center>
        <Stack spacing="4">
          <VStack as="h1" spacing="6" mt="8">
            <PhonebookLogo />
            <Heading
              as="h1"
              fontWeight="300"
              fontSize="24px"
              letterSpacing="-0.5px"
            >
              Register on Phonebook{' '}
            </Heading>
          </VStack>
          <Card
            bg="#f6f8fa"
            variant="outline"
            borderColor="#d8dee4"
            maxW="385px"
          >
            <CardBody>
              <form onSubmit={handleSubmit} autoComplete="off">
                <Stack spacing="4">
                  <FormControl isRequired>
                    <FormLabel size="sm">Username</FormLabel>
                    <Input
                      placeholder="Username"
                      type="text"
                      name="name"
                      bg="white"
                      borderColor="#d8dee4"
                      size="sm"
                      borderRadius="6px"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel size="sm">Email</FormLabel>
                    <Input
                      placeholder="Email"
                      type="email"
                      name="email"
                      bg="white"
                      borderColor="#d8dee4"
                      size="sm"
                      borderRadius="6px"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel size="sm">Password</FormLabel>
                    <Input
                      placeholder="Password"
                      type="password"
                      name="password"
                      bg="white"
                      borderColor="#d8dee4"
                      size="sm"
                      borderRadius="6px"
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    bg="#7b68ee"
                    color="white"
                    size="sm"
                    _hover={{ bg: '#8a2be2' }}
                    _active={{ bg: '#9932cc' }}
                  >
                    {' '}
                    Register
                  </Button>
                </Stack>
              </form>
            </CardBody>
          </Card>
        </Stack>
      </Center>
    </Box>
  );
};
