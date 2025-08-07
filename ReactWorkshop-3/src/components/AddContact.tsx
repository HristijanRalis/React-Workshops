import { useState } from "react";
import type { IContact } from "./Contacts";

type Props = {
  handleAddContact: (newContact: IContact) => void;
};

const initialState = {
  id: 0,
  name: "",
  email: "",
  phone: "",
};

export const AddContact = ({ handleAddContact }: Props) => {
  const [formData, setFormData] = useState(initialState);

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const key = e.target.name;

    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newContact = {
      ...formData,
      id: new Date().valueOf(),
    };
    handleAddContact(newContact);
    setFormData(initialState);
  };

  const submitedDisabled =
    formData.name.length === 0 ||
    formData.email.length === 0 ||
    formData.phone.length === 0;
  return (
    <div className="AddContact">
      <h2>Add contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={formData.name}
          placeholder="Enter name..."
          name="name"
          onChange={handleFormData}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={formData.email}
          placeholder="Enter Email..."
          name="email"
          onChange={handleFormData}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          value={formData.phone}
          placeholder="Enter phone..."
          name="phone"
          onChange={handleFormData}
        />
        <button type="submit" disabled={submitedDisabled}>
          Add Contact
        </button>
      </form>
    </div>
  );
};
