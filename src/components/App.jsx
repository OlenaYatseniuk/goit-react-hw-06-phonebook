import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Container from './Container';
import Section from './Section';
import Filter from './Filter';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

export function App() {
  const contacts = useSelector(state => state.items.contacts);

  return (
    <>
      <Section title="PhoneBook">
        <Container>
          <ContactForm />
        </Container>
      </Section>
      <Section title="Contacts">
        <Container>
          {contacts.length ? (
            <>
              <Filter />
              <ContactsList />
            </>
          ) : (
            <div>There are no contacts here=( Please add a new contact.</div>
          )}
        </Container>
      </Section>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
