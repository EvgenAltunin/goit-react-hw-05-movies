import { toast } from 'react-toastify';
import { notificationParams } from '../../settings/settings';
import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import {
  Search,
  Form,
  FormSubmit,
  Input,
} from 'components/Searchbar/Searchbar.styled';


export function Searchbar({ onFormSubmit }) {
  const [value, setValue] = useState('');

  const handleInputValueChange = event => {
    setValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value.trim() === '') {
      toast.error('Search field must be filled!', { notificationParams });

      return;
    }
    onFormSubmit(value);

    setValue('');
  };

  return (
    <Search>
      <Form onSubmit={handleSubmit}>
        <FormSubmit type="submit">
          <SearchIcon width="25" height="25" />
        </FormSubmit>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          value={value}
          onChange={handleInputValueChange}
        />
      </Form>
    </Search>
  );
}
