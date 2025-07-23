import React from "react";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className="container  ">
      <SectionTitle sub="Read Our " title="About us" />
      <div className="flex flex-col justify-center items-center space-y-3 mt-5">
        <p className="w-[550px] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          dolorum aliquid neque voluptas placeat non commodi quo? Tempora
          beatae, deleniti ipsa deserunt qui eligendi error, alias corrupti aut
          eius minima.
        </p>
        <p className="w-[550px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tempore
          perferendis voluptatibus quam explicabo odit non! Libero, est? Rerum
          et corrupti magni quasi sequi exercitationem provident possimus ipsam
          sapiente est!
        </p>
        <p className="w-[550px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tempore
          perferendis voluptatibus quam explicabo odit non! Libero, est? Rerum
          et corrupti magni quasi sequi exercitationem provident possimus ipsam
          sapiente est!
        </p>
      </div>
    </div>
  );
}

export default About;
