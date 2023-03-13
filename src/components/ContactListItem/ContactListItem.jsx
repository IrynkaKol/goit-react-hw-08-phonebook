import {
  Item,
  Contact,
  Wrapper,
  Button,
} from '../ContactList/ContactList.styled';
import { BsPersonCircle } from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/operations';

export const ContactListItem = ({
  id,
  name: nameValue,
  number: numberValue,
  handleDelete,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(nameValue);
  const [number, setNumber] = useState(numberValue);
  const dispatch = useDispatch();

  const handleChangeMode = () => {
    if (isEdit) {
      setIsEdit(prev => !prev);
      dispatch(editContact({ id, name, number }));
      return;
    }
    setIsEdit(prev => !prev);
  };
  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        return;
      case 'number':
        setNumber(e.target.value);
        return;
      default:
        return;
    }
  };

  return (
    <Item>
      <Contact>
        <BsPersonCircle size="25" color="#1E90FF" />
        <Wrapper>
          {isEdit ? (
            <input
              name="name"
              onChange={handleChange}
              type="text"
              value={name}
            />
          ) : (
            <span>
              {' '}
              <AiFillPhone />
              {name}:{' '}
            </span>
          )}

          <br />
          {isEdit ? (
            <input
              name="number"
              onChange={handleChange}
              type="text"
              value={number}
            />
          ) : (
            <span> {number}</span>
          )}
        </Wrapper>
      </Contact>
      <Button onClick={() => handleDelete(id)}>Delete</Button>
      <Button onClick={handleChangeMode}>{isEdit ? 'Save' : 'Edit'}</Button>
    </Item>
  );
};
