import { Form, Label } from "./RegisterForm.styled";


export const RegisterForm = () => {
    return (
    <Form>
        <Label>
          Username
          <input type="text" name="name" />
        </Label>
        <Label type="email" name="email">
          Email
          <input />
        </Label>
        <Label>
          Password
          <input type="password" name="password"/>
        </Label>
        <button type="submit"> Register</button>
      </Form>
      )
  
};
