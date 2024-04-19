import React from 'react';
import {
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineSearch,
} from 'react-icons/ai';
import SingleContactInfo from '@/app/[locale]/contacts/_components/single-contact-info';

const IconGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <SingleContactInfo
        icon={<AiOutlineHome />}
        subtitle="Feature One"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <SingleContactInfo
        icon={<AiOutlineSetting />}
        subtitle="Feature Two"
        text="Sed do eiusmod tempor incididunt ut labore et dolore."
      />
      <SingleContactInfo
        icon={<AiOutlineMessage />}
        subtitle="Feature Three"
        text="Magna aliqua. Ut enim ad minim veniam."
      />
      <SingleContactInfo
        icon={<AiOutlineSearch />}
        subtitle="Feature Four"
        text="Quis nostrud exercitation ullamco laboris nisi ut aliquip."
      />
    </div>
  );
};

export default IconGrid;
