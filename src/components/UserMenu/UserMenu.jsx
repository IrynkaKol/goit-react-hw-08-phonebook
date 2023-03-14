import Filter from 'components/Filter/Filter';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux'
import { logOut } from 'redux/auth/operations';
import {Button} from './UserMenu.styled'
import {Box, Flex} from '@chakra-ui/react'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut())
  }

  return (
    <Flex gap="60px">
      <Box>
      <Filter/>
      </Box>
      <Box>
      <p>Welcome, {user.name}</p>
      <p>{user.email}</p>
      <Button type="button " onClick={handleLogOut}></Button>
      </Box>
    </Flex>
  );
};
