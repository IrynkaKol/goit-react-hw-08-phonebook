import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 0;
  padding: 0;
  background-image: url('https://cdn-icons-png.flaticon.com/128/4774/4774667.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
`;
