import Section from "../components/section/Section";
import ContactList from "../components/phonebook/contactList/ContactList";
import Phonebook from "../components/phonebook/Phonebook";
import Filter from "../components/phonebook/filter/Filter";

export default function App() {
  return (
    <div>
      <Phonebook />
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}
