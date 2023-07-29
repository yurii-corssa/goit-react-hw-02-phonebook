import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { Notification } from '../Notification/Notification';

export const Contacts = ({ filter, onFiltered, onChange }) => {
  const filteredContacts = onFiltered(filter);

  return (
    <>
      <Filter onChange={onChange} filter={filter} />

      {filter.length && !filteredContacts.length ? (
        <Notification text="Contact with the entered name was not found" />
      ) : (
        <ContactsList contacts={filteredContacts} />
      )}
    </>
  );
};
