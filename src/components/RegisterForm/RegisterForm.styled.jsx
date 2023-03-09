export const RegisterForm = () => {
    return (<form>
        <label>
          Username
          <input type="text" name="name" />
        </label>
        <label type="email" name="email">
          Email
          <input />
        </label>
        <label>
          Password
          <input type="password" name="password"/>
        </label>
        <button type="submit"> Register</button>
      </form>;)
  
};
