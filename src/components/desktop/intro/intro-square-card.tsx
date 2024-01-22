import React from "react";
import OptImage from "@/components/ui/optimised-image";

interface IntroCardProps {
  src: string;
  alt: string;
  name: string;
  muted: string;
}

const IntroSquareCard = ({ src, alt, name, muted }: IntroCardProps) => {
  return (
    <div className="relative z-20 w-full">
      <OptImage
        className=" aspect-square max-h-[27rem] w-full overflow-hidden rounded-2xl  sm:max-h-[34rem] md:max-h-[84rem]"
        src={src}
        alt={alt}
      />
      <div className="absolute inset-0 flex flex-col items-start justify-start  p-3 md:p-4 lg:p-6">
        <div className=" f dark:text-whiteline-clamp-1 text-lg lg:text-xl font-bold tracking-tight text-gray-200  opacity-90">
          {name}
        </div>
        <div className="font-normal text-gray-200 opacity-75">
          {muted}
        </div>
      </div>
    </div>
  );
};

export default IntroSquareCard;
