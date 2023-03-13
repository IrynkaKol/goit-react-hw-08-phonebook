import Filter from 'components/Filter/Filter';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux'
import { logOut } from 'redux/auth/operations';
import {Button} from './UserMenu.styled'


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut())
  }

  return (
    <div>
      <Filter/>
      <p>Welcome, {user.name}</p>
      <p>{user.email}</p>
      <Button type="button " onClick={handleLogOut}></Button>
    </div>
  );
};
