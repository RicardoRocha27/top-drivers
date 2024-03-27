type HeaderProps = {
  title: string;
  subtitle: string;
};

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div>
      <h1
        className="text-4xl md:text-6xl mb-2"
        style={{ fontFamily: "Times New Roman" }}
      >
        {title}
      </h1>
      <p className="text-sm md:text-base text-foreground/80">{subtitle}</p>
    </div>
  );
};
