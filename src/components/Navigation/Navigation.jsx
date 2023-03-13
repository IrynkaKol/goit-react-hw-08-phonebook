import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { PhonebookLogo } from 'phonebook-logo';


export const Navigation = () => {
    const { isLoggedIn } = useAuth();
  
    return (
      <nav>
        <NavLink to="/">
        <PhonebookLogo/>
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts">
            
          </NavLink>
        )}
      </nav>
    );
  };