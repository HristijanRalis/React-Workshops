import { useState } from "react";
import type { IContact } from "./Contacts";

type Props = {
  contactData: IContact;
};

export const Contact = ({ contactData }: Props) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div className="Contact">
      <h4>
        {contactData.name}
        <i className="fas fa-sort-down"></i>
        <i
          className="fas fa-times"
          style={{ float: "right", color: "red" }}
        ></i>
      </h4>

      <ul>
        <li>Email: {contactData.email}</li>
        <li>Phone: {contactData.phone}</li>
      </ul>
    </div>
  );
};
