import React from "react";

type TimelineEventProps = {
  date: string;
  title: string;
  description: string;
};

export const TimelineEvent = ({
  date,
  title,
  description,
}: TimelineEventProps) => {
  return (
    <div className="flex flex-col py-4 relative">
      <div className="flex space-x-2 items-center">
        <div className="w-1 h-1 bg-accent rounded-full" />
        <span className="text-sm text-accent whitespace-nowrap">{date}</span>
        <div className="h-[1px] bg-accent flex-grow" />
      </div>
      <div className="mt-1">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-foreground/80 mt-2">{description}</p>
      </div>
    </div>
  );
};
