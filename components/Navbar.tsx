import { Routes } from "@/lib/constants";
import React from "react";
import LinksComponent from "./LinksComponent";
import Link from "@/app/link";

function Navbar() {
  return (
    <nav className="w-full h-[40px] py-5 relative mb-7">
      <div className="container flex justify-between items-center">
        <div className="">
          <Link href={Routes.HOME}>
            <h1 className="text-2xl font-semibold uppercase">EASYSHOP</h1>
          </Link>
        </div>
        <LinksComponent />
      </div>
    </nav>
  );
}

export default Navbar;
