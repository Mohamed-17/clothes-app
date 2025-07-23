import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "../link";

function Hero() {
  return (
    <section className="">
      <div className="relative h-[93vh] w-full overflow-hidden">
        {/* <!-- Background --> */}
        <div className="absolute inset-0 "></div>

        {/* <!-- Diagonal Shape --> */}
        <div className="absolute inset-0 bg-[#5c1f2d] [clip-path:polygon(100%_20%,100%_0%,100%_100%,20%_100%)]"></div>

        {/* <!-- Content --> */}
        <div className="relative z-10 md:p-12 container grid grid-col-1 md:grid-cols-2 mt-15 md:mt-18">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl md:text-5xl font-bold ">
              Find your <span className="italic text-[#5c1f2d]">personal</span>{" "}
              style
            </h1>
            <p className="mt-4 text-sm md:text-xl ">
              Don&apos;t miss out on these fabulous deals!
            </p>
            <Button
              className="mt-6 md:w-30 md:h-14 w-25 h-10 cursor-pointer  px-4 py-2 bg-[#5c1f2d] rounded-sm font-bold hover:bg-[#5c1f2d] text-white"
              asChild
              variant={"default"}
            >
              <Link href="/products">Shop Now</Link>
            </Button>
          </div>
          <div className="relative w-[200px]md:w-xl ">
            <Image
              height={700}
              width={400}
              src={"/images/hero.png"}
              priority
              loading="eager"
              alt="logo of easyshop"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
