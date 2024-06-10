import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  TWITTER_LINK,
} from '@/components/shared/footer/social-icons';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa6';
import { PiInstagramLogoFill } from 'react-icons/pi';

type ContactInfoProps = {
  icon: React.ReactElement;
  subtitle: string;
  text: string;
};

const MAP_NAMES_TO_LINKS: { [key: string]: string } = {
  Instagram: INSTAGRAM_LINK,
  Facebook: FACEBOOK_LINK,
  Twitter: TWITTER_LINK,
  '+351 916343416': 'tel:+916343416',
  'info@topdrivers.pt': 'mailto:info@topdrivers.pt',
};

export const ContactsInfo = ({ icon, subtitle, text }: ContactInfoProps) => {
  return (
    <div className="bg-secondary p-4 rounded-lg flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <div className="text-lg">{icon}</div>
        <h3 className="font-semibold">{subtitle}</h3>
      </div>
      {text !== '' ? (
        !subtitle.includes('24/7') ? (
          <Link
            href={MAP_NAMES_TO_LINKS[text]}
            className="text-sm text-foreground/80 hover:text-foreground"
          >
            {text}
          </Link>
        ) : (
          <p className="text-sm text-foreground/80">{text}</p>
        )
      ) : (
        <div className="flex flex-col gap-2">
          <Link
            href={FACEBOOK_LINK}
            target="_blank"
            className="text-sm text-foreground/80 hover:text-foreground flex gap-2 items-center"
          >
            <FaFacebook /> Facebook
          </Link>
          <Link
            href={INSTAGRAM_LINK}
            target="_blank"
            className="text-sm text-foreground/80 hover:text-foreground flex gap-2 items-center"
          >
            <PiInstagramLogoFill /> Instagram
          </Link>
          <Link
            href={TWITTER_LINK}
            target="_blank"
            className="text-sm text-foreground/80 hover:text-foreground flex gap-2 items-center"
          >
            <FaTwitter /> Twitter
          </Link>
        </div>
      )}
    </div>
  );
};
