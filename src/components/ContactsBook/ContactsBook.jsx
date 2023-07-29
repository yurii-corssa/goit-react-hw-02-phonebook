import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './ContactsBook.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Notification } from './Notification/Notification';

export class ContactsBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = data => {
    const id = nanoid();

    this.setState(prevState => {
      if (this.findContact(data.name)) {
        alert(`${data.name} is already to contacts`);
        return;
      }

      return {
        contacts: [...prevState.contacts, { ...data, id: id }],
      };
    });
  };

  filteredContacts = value =>
    this.state.contacts.filter(contact => {
      return this.normalizeStr(contact.name).includes(this.normalizeStr(value));
    });

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  normalizeStr = string => string.trim().toLowerCase();

  findContact = value =>
    this.state.contacts.find(
      contact => this.normalizeStr(contact.name) === this.normalizeStr(value)
    );

  removeContact = value =>
    this.setState(prevState => {
      const contacts = prevState.contacts.reduce((arr, contact) => {
        if (contact.name !== value) {
          arr.push(contact);
        }

        return arr;
      }, []);

      return { contacts: contacts };
    });

  render() {
    const { filter, contacts } = this.state;

    return (
      <Container>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        {contacts.length ? (
          <Contacts
            onFiltered={this.filteredContacts}
            onChange={this.handleChange}
            onRemove={this.removeContact}
            filter={filter}
          />
        ) : (
          <Notification text="Contact book is empty" />
        )}
      </Container>
    );
  }
}
