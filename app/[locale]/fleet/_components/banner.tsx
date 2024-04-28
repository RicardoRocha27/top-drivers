import { Quote } from "lucide-react";

export const Banner = () => {
  return (
    <div className="bg-secondary w-full rounded-lg py-16 px-4 my-32 relative flex justify-center">
      <h1 className="text-center text-xl font-semibold max-w-4xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
        repellendus vel possimus laboriosam, magnam perspiciatis.
      </h1>
      <Quote className="absolute top-8 left-8 size-14 opacity-30" />
    </div>
  );
};
