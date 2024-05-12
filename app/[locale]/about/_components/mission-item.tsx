type MissionItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const MissionItem = ({ title, description, icon }: MissionItemProps) => {
  return (
    <div className="flex items-start gap-2">
      <span className="text-accent">{icon}</span>
      <p className="text-sm text-foreground/80">
        <span className="font-bold text-foreground">{title}.</span>{" "}
        {description}
      </p>
    </div>
  );
};
