import React from "react";
import ContactCard from "../components/contact";

const ContactsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
  );
};

export default ContactsPage;
