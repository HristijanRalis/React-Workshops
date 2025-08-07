import { useState } from "react";
import type { IContact } from "./Contacts";

type Props = {
  contactData: IContact;
  handleDeleteContact: (contactId: number) => void;
};

export const Contact = ({ contactData, handleDeleteContact }: Props) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleShowDetails = () => {
    setShowDetail((prevState) => !prevState);
  };
  return (
    <div className="Contact">
      <h4>
        {contactData.name}
        <i className="fas fa-sort-down" onClick={handleShowDetails}></i>
        <i
          className="fas fa-times"
          style={{ float: "right", color: "red" }}
          onClick={() => {
            handleDeleteContact(contactData.id);
          }}
        ></i>
      </h4>

      {showDetail ? (
        <ul>
          <li>Email: {contactData.email}</li>
          <li>Phone: {contactData.phone}</li>
        </ul>
      ) : null}
    </div>
  );
};
