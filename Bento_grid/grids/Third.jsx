
import React from "react";

const Third = () => {
  const squares = Array.from({ length: 200 });

  return (
    <div className="p-4  bg-white rounded-xl h-full shadow-2xl lg:row-span-2 overflow-hidden">
      <h4 className="text-xl font-bold mb-2">
        Generate scores based on pictures
      </h4>

      <p className="text-neutral-500 mb-16">
        Rate your candidate's looks. As real as ATS scores.
      </p>

      <div className=" m-2 flex flex-shrink-0 scale-110 flex-wrap items-center justify-center gap-x-px gap-y-px bg-gray-100 dark:bg-neutral-900 mt-1.5">
        {squares.map((_, index) => (
          <div
            key={index}
            className={`flex h-10 w-10 flex-shrink-0 rounded-[2px] bg-gray-50 dark:bg-neutral-950 ${
              index % 2 === 1
                ? "shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
                : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Third;
