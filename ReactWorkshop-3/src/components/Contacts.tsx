import { useEffect, useState } from "react";
import { Contact } from "./Contact";
import { AddContact } from "./AddContact";

export interface IContact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const initialState: IContact[] = [
  {
    id: 1,
    name: "blagica",
    email: "blagica@brainster.co",
    phone: "5641231234",
  },
  {
    id: 2,
    name: "kristijan",
    email: "kristijan@brainster.co",
    phone: "5654744",
  },
  { id: 3, name: "ognen", email: "ognen@brainster.co", phone: "123456789" },
];

export const Contacts = () => {
  const [contacts, setContacts] = useState<IContact[]>(initialState);

  const handleAddContact = (newContact: IContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = (contactId: number) => {
    const filteredContacts = contacts.filter((c) => c.id !== contactId);
    setContacts(filteredContacts);
  };

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");

    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <AddContact handleAddContact={handleAddContact} />
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contactData={contact}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </div>
  );
};
