export const Contacts = ({ data }) => {
  return (
    <ul>
      {data.map(contact => {
        return <li key={contact.id}>{contact.name}</li>;
      })}
    </ul>
  );
};
