type FooterLinkProps = {
  title: string;
  links: string[];
};

export const FooterLink = ({ title, links }: FooterLinkProps) => {
  return (
    <div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <div className="flex flex-col space-y-1">
        {links.map((link: string, index: number) => (
          <a key={index} href="#" className="text-sm hover:underline w-fit">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};
