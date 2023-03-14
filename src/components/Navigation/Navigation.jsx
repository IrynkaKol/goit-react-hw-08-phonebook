import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { PhonebookLogo } from 'phonebook-logo';
import { Flex, Box, Heading } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      marginBottom="16px"
    >
      <nav>
        <NavLink to="/">
          <Box display="flex" mt="2" alignItems="center">
            <PhonebookLogo />
            <Heading as="h1"
            fontWeight="300"
            fontSize="24px"
            
            >Phonebook</Heading>
          </Box>
        </NavLink>
        {isLoggedIn && <NavLink style={{color: 'blue'}} to="/contacts">Contacts</NavLink>}
      </nav>
    </Flex>
  );
};
