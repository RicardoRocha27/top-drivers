import React from "react";
import {
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineSearch,
} from "react-icons/ai";
import { ContactsInfo } from "./contacts-info";

export const ContactInfoGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ContactsInfo
        icon={<AiOutlineHome />}
        subtitle="Feature One"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ContactsInfo
        icon={<AiOutlineSetting />}
        subtitle="Feature Two"
        text="Sed do eiusmod tempor incididunt ut labore et dolore."
      />
      <ContactsInfo
        icon={<AiOutlineMessage />}
        subtitle="Feature Three"
        text="Magna aliqua. Ut enim ad minim veniam."
      />
      <ContactsInfo
        icon={<AiOutlineSearch />}
        subtitle="Feature Four"
        text="Quis nostrud exercitation ullamco laboris nisi ut aliquip."
      />
    </div>
  );
};
