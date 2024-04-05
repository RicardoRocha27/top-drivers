import React from 'react';
import { FaFacebook } from 'react-icons/fa6';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { RiWhatsappFill } from 'react-icons/ri';

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 mt-4 lg:mt-3">
      <a
        href="#"
        className="transition-colors duration-300 dark:text-gray-300"
        aria-label="Reddit"
      >
        <FaFacebook size={16} />
      </a>
      <a
        href="#"
        className="transition-colors duration-300 dark:text-gray-300"
        aria-label="Facebook"
      >
        <PiInstagramLogoFill size={17} />
      </a>
      <a
        href="#"
        className="transition-colors duration-300 dark:text-gray-300 "
        aria-label="Github"
      >
        <RiWhatsappFill size={17} />
      </a>
    </div>
  );
};

export default SocialIcons;
