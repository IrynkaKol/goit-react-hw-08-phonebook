import { NavLink } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Box>
      <NavLink to="/login">
        <Button
          type="submit"
          bg="#7b68ee"
          color="white"
          size="xs"
          _hover={{ bg: '#8a2be2' }}
          _active={{ bg: '#9932cc' }}
        >
          Sign in
        </Button>
      </NavLink>
    </Box>
  );
};
