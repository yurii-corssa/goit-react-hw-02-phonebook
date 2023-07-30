import PropTypes from 'prop-types';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { Notification } from '../Notification/Notification';
import { List, Wrapper } from './Contacts.styled';

export const Contacts = ({ filter, onFiltered, onChange, onRemove }) => {
  const filteredContacts = onFiltered(filter);
  const notification = 'Contact with the entered name was not found!';

  return (
    <Wrapper>
      <Filter onChange={onChange} filter={filter} />

      {filter.length && !filteredContacts.length ? (
        <Notification text={notification} />
      ) : (
        <List>
          <ContactsList contacts={filteredContacts} onRemove={onRemove} />
        </List>
      )}
    </Wrapper>
  );
};

Contacts.propTypes = {
  filter: PropTypes.string.isRequired,
  onFiltered: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
