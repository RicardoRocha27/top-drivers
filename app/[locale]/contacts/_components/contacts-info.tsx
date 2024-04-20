import React from "react";

type ContactInfoProps = {
  icon: React.ReactElement;
  subtitle: string;
  text: string;
};

export const ContactsInfo = ({ icon, subtitle, text }: ContactInfoProps) => {
  return (
    <div className="bg-secondary p-4 rounded-lg flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <div className="text-lg">{icon}</div>
        <h3 className="font-semibold">{subtitle}</h3>
      </div>
      <p className="text-sm text-foreground/80">{text}</p>
    </div>
  );
};
