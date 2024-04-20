import { useLocale } from "next-intl";

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
  };

  return (
    <div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <div className="flex flex-col space-y-1">
        {links.map((link: string, index: number) => (
          <a
            key={index}
            href={MAP_NAMES_TO_LINKS[link]}
            className="text-sm hover:underline w-fit"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};
