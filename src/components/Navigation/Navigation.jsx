import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { PhonebookLogo } from 'phonebook-logo';
import {Flex} from '@chakra-ui/react';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
  
    return (
      <Flex 
      justifyContent = "space-between"
      alignItems="center"
      marginBottom="16px">
      <nav>
        <NavLink to="/">
          
        <PhonebookLogo/>
        
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
      </Flex>
    );
  };