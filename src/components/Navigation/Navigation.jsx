import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { PhonebookLogo } from 'phonebook-logo';
import { Flex, Box } from '@chakra-ui/react';

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
          </Box>
        </NavLink>
        {isLoggedIn && <NavLink style={{color: 'blue'}} to="/contacts">Contacts</NavLink>}
      </nav>
    </Flex>
  );
};
