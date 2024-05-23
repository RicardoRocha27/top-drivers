import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";

export const FACEBOOK_LINK = "https://www.facebook.com/topdrivers.portugal/";
export const INSTAGRAM_LINK =
  "https://www.instagram.com/topdrivers_portugal?igsh=MWlhaHVibHM1MXpmdw==";
export const TWITTER_LINK = "https://x.com/TopDrivers_Pt";

export const SocialIcons = () => {
  return (
    <div className="flex space-x-4 mt-4 lg:mt-3">
      <Link
        href={FACEBOOK_LINK}
        target="_blank"
        className="transition-colors duration-300 dark:text-gray-300"
        aria-label="Reddit"
      >
        <FaFacebook size={16} />
      </Link>
      <Link
        href={INSTAGRAM_LINK}
        target="_blank"
        className="transition-colors duration-300 dark:text-gray-300"
        aria-label="Facebook"
      >
        <PiInstagramLogoFill size={17} />
      </Link>
      <Link
        href={TWITTER_LINK}
        target="_blank"
        className="transition-colors duration-300 dark:text-gray-300 "
        aria-label="Github"
      >
        <RiWhatsappFill size={17} />
      </Link>
    </div>
  );
};
