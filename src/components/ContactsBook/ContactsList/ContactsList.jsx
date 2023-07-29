export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id}>
            <span>{name}: </span>
            <span>{number} </span>
          </li>
        );
      })}
    </ul>
  );
};
