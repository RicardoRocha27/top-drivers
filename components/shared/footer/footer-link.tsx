import { useLocale } from "next-intl";
import Link from "next/link";

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
    Instagram: "https://www.instagram.com",
    Facebook: "https://www.facebook.com",
    966513221: "tel:+966513221",
    "info@topdrivers.pt": "mailto:info@topdrivers.pt",
    // TODO: ADD STREET HERE
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
              >
                {link}
              </Link>
            )
        )}
      </div>
    </div>
  );
};
