import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { PhonebookLogo } from 'phonebook-logo';
import { Flex, Box, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';





const StyledLink = styled(NavLink)`
color: blue;
 padding-left: 50px;
  font-weight:600;
&:hover, &:focus {
  
  color: #8a2be2;
}

`

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
          <Box display="flex" mt="2" alignItems="center" gap="10px" paddingLeft="10px">
            <PhonebookLogo />
            <Heading as="h1"
            fontWeight="600"
            fontSize="24px"
            backgroundImage='linear-gradient(to bottom left, #ff00ff, #00bfff)'
            color="transparent"
            backgroundClip="text"
            textAlign = 'center'
            >Phonebook</Heading>
          </Box>
        </NavLink>
        {isLoggedIn && 
        <Box>
        <StyledLink  to="/contacts">Contacts</StyledLink>
        </Box>}
        
      </nav>
    </Flex>
  );
};
