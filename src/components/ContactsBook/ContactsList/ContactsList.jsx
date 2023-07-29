export const ContactsList = ({ contacts, onRemove }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id}>
            <span>{name}: </span>
            <span>{number} </span>
            <button type="button" onClick={() => onRemove(name)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
