import { NavLink } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Box>
      <NavLink to="/login">
        <Button
          type="submit"
          bg="#2da44e"
          color="white"
          size="xs"
          _hover={{ bg: '#2c974b' }}
          _active={{ bg: '#298e46' }}
        >
          Sign in
        </Button>
      </NavLink>
    </Box>
  );
};
