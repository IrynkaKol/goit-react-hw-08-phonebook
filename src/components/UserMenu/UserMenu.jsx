import { useAuth } from 'hooks';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, user {user.name}</p>
      <button type="button ">Logout</button>
    </div>
  );
};
