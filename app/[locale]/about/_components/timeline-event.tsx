// components/TimelineEvent.tsx
import React from 'react';

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  date,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col py-4 relative">
      <div className="flex space-x-2 items-center">
        <div className="w-1 h-1 bg-accent rounded-full"></div>
        <span className="text-sm text-accent whitespace-nowrap">{date}</span>
        <div className="h-[1px] bg-accent flex-grow"></div>
      </div>
      <div className="mt-1">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-foreground/80 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;
