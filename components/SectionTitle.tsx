import React from "react";

function SectionTitle({ sub, title }: { sub: string; title: string }) {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="font-semibold text-xl text-gray-500">{sub}</div>
      <div className="font-bold text-3xl md:text-4xl text-[#5c1f2d]">
        {title}
      </div>
    </div>
  );
}

export default SectionTitle;
