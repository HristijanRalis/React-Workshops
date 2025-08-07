import { useState } from "react";
import { Contact } from "./Contact";

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

  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact.id} contactData={contact} />
      ))}
    </div>
  );
};
