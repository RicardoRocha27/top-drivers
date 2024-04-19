import React from 'react';

interface SingleContactInfoProps {
  icon: JSX.Element;
  subtitle: string;
  text: string;
}

const SingleContactInfo: React.FC<SingleContactInfoProps> = ({
  icon,
  subtitle,
  text,
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold">{subtitle}</h3>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default SingleContactInfo;
