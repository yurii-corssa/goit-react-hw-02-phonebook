import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  ContactsWrapper,
  Container,
  Title,
  TitleContacts,
} from './ContactsBook.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Notification } from './Notification/Notification';
import { Filter } from './Filter/Filter';

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

  submitForm = data => {
    if (this.findContact(data.name)) {
      alert(`${data.name} is already to contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data, id: nanoid() }],
    }));
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
      const filteredContacts = prevState.contacts.filter(
        contact => contact.name !== value
      );

      return { contacts: filteredContacts };
    });

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.filteredContacts(filter);

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.submitForm} />

        <TitleContacts>Contacts</TitleContacts>
        <ContactsWrapper>
          <Filter onChange={this.handleChange} filter={filter} />
          <Contacts
            filteredContacts={filteredContacts}
            onRemove={this.removeContact}
          />

          {contacts.length !== 0 && !filteredContacts.length && (
            <Notification text="Contact with the entered name was not found!" />
          )}
          {!contacts.length && <Notification text="Contact book is empty" />}
        </ContactsWrapper>
      </Container>
    );
  }
}
