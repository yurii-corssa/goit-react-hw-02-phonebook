import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './ContactsBook.styled';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';

export class ContactsBook extends Component {
  state = {
    contacts: [],
  };

  handleSubmit = data => {
    const id = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data, id: id }],
    }));
  };

  render() {
    return (
      <Container>
        <Section
          title="Phonebook"
          children={<ContactForm onSubmit={this.handleSubmit} />}
        />
        <Section
          title="Contacts"
          children={<Contacts data={this.state.contacts} />}
        />
      </Container>
    );
  }
}
