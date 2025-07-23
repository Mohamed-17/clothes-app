import Link from "@/app/link";
import { NavLinks, Routes } from "@/lib/constants";

import React from "react";
import { Button } from "./ui/button";
import { Menu, User } from "lucide-react";
import { ModeToggle } from "./ToggleTheme";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

function LinksComponent() {
  const links = [
    { id: crypto.randomUUID(), title: NavLinks.HOMEPAGE, url: Routes.HOME },
    { id: crypto.randomUUID(), title: NavLinks.MENUPAGE, url: Routes.MENU },
    { id: crypto.randomUUID(), title: NavLinks.ABOUTPAGE, url: Routes.ABOUT },
    {
      id: crypto.randomUUID(),
      title: NavLinks.CONTACTPAGE,
      url: Routes.CONTACT,
    },
    {
      id: crypto.randomUUID(),
      title: NavLinks.AUTHPAGE,
      url: Routes.AUTH,
      icon: <User />,
    },
  ];
  return (
    <div className="flex-1 justify-end flex">
      <ul className=" gap-5 hidden md:flex">
        {links.map((link) => (
          <Button
            key={link.id}
            asChild
            variant={link.title === NavLinks.AUTHPAGE ? "default" : "ghost"}
          >
            <Link
              href={`${link.url && `${link.url}`}`}
              className={`capitalize 
               `}
            >
              {link.icon && <span>{link.icon}</span>}
              <span
                className={`${
                  link.title !== NavLinks.AUTHPAGE && `hover:text-amber-600`
                }`}
              >
                {link.title}
              </span>
            </Link>
          </Button>
        ))}
        <li className="ml-2">
          <ModeToggle />
        </li>
      </ul>

      <div className="md:hidden inline">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className="w-full sm:w-full">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex-1 justify-center items-start flex">
              <ul className=" gap-5 flex flex-col ">
                {links.map((link) => (
                  <Button
                    key={link.id}
                    asChild
                    variant={
                      link.title === NavLinks.AUTHPAGE ? "default" : "ghost"
                    }
                  >
                    <Link
                      href={`${link.url && `${link.url}`}`}
                      className={`capitalize 
               `}
                    >
                      {link.icon && <span>{link.icon}</span>}
                      <span
                        className={`${
                          link.title !== NavLinks.AUTHPAGE &&
                          `hover:text-amber-600`
                        }`}
                      >
                        {link.title}
                      </span>
                    </Link>
                  </Button>
                ))}
                <li className="ml-8">
                  <ModeToggle />
                </li>
              </ul>{" "}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default LinksComponent;
