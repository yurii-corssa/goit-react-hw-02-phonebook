export const Contacts = ({ data }) => {
  return (
    <ul>
      {data.map(contact => {
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
