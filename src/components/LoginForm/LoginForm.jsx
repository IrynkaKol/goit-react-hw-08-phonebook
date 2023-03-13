import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
//import { Form } from './LoginForm.styled';
import {
  Box,
  Heading,
  VStack,
  Card,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Button,
  Stack,
  CardBody,
  Text,
  Link,
  Center,
} from '@chakra-ui/react';
import { PhonebookLogo } from 'phonebook-logo';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
          <VStack as="header" spacing="6" mt="8">
            <PhonebookLogo />
            <Heading
              as="h1"
              fontWeight="300"
              fontSize="24px"
              letterSpacing="-0.5px"
            >
              Sign in to Phonebook
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
                    <FormLabel size="sm">Email addres</FormLabel>
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
                    <HStack justify="space-between">
                      <FormLabel size="sm">
                        Password
                        <Button
                          as="a"
                          href="#"
                          variant="link"
                          size="xs"
                          color="#0969da"
                          fontWeight="500"
                        >
                          Forgot password?
                        </Button>
                      </FormLabel>
                    </HStack>
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
                    bg="#2da44e"
                    color="white"
                    size="sm"
                    _hover={{ bg: '#2c974b' }}
                    _active={{ bg: '#298e46' }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </form>
            </CardBody>
          </Card>
          <Card variant="outline" borderColor="#d0d7de">
            <CardBody>
              <Center>
                <HStack fontSize="sm" spacing="1">
                  <Text>New to Phonebook</Text>
                  <Link to="/register" color="#0969da"  >
                    Create an account,
                  </Link>
                </HStack>
              </Center>
            </CardBody>
          </Card>
        </Stack>
      </Center>
    </Box>
  );
};
