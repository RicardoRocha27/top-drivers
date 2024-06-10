import { useLocale } from 'next-intl';
import Link from 'next/link';
import { FACEBOOK_LINK, INSTAGRAM_LINK, TWITTER_LINK } from './social-icons';

type FooterLinkProps = {
  title: string;
  links: string[];
};

export const FooterLink = ({ title, links }: FooterLinkProps) => {
  const locale = useLocale();

  const MAP_NAMES_TO_LINKS: { [key: string]: string } = {
    Home: `/${locale}`,
    Início: `/${locale}`,
    Services: `/${locale}/services`,
    Serviços: `/${locale}/services`,
    Fleet: `/${locale}/fleet`,
    Frota: `/${locale}/fleet`,
    About: `/${locale}/about`,
    Sobre: `/${locale}/about`,
    Contacts: `/${locale}/contacts`,
    Contactos: `/${locale}/contacts`,
    Instagram: INSTAGRAM_LINK,
    Facebook: FACEBOOK_LINK,
    Twitter: TWITTER_LINK,
    916343416: 'tel:+916343416',
    'info@topdrivers.pt': 'mailto:info@topdrivers.pt',
  };

  return (
    <div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <div className="flex flex-col space-y-1">
        {links.map(
          (link: string, index: number) =>
            MAP_NAMES_TO_LINKS[link] && (
              <Link
                key={index}
                href={MAP_NAMES_TO_LINKS[link]}
                className="text-sm hover:underline w-fit"
                target={
                  MAP_NAMES_TO_LINKS[link].includes('http') ? '_blank' : '_self'
                }
              >
                {link}
              </Link>
            )
        )}
      </div>
    </div>
  );
};
