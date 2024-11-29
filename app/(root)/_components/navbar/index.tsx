"use client";

import { motion as m } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify, CircleHelp, FlaskRound, HandCoins, Home, Table2Icon, Users } from "lucide-react";

export const navigations: Navigation[] = [
  { name: "Predict", url: "/predict", icon: FlaskRound },
  { name: "How it work", url: "/howitwork", icon: CircleHelp },
  { name: "Dataset", url: "/dataset", icon: Table2Icon },
  { name: "Member", url: "/member", icon: Users },
];

export const Navbar = () => {
  return (
    <m.header
      animate={{ y: [-100, 0], opacity: [0, 0.5, 1] }}
      transition={{ duration: 1, delay: 2, ease: "circOut" }}
      className="flex p-6 justify-between items-center"
    >
      <Link className="text-xl font-bold flex justify-center items-center gap-2" href="/">
        <HandCoins /> {process.env.NEXT_PUBLIC_APP}
      </Link>

      <div className="md:flex ms-auto hidden justify-center items-center gap-6">
        {navigations.map((nav: Navigation, index: number) => {
          return (
            <Link
              key={index}
              className="text-muted-foreground flex justify-center items-center gap-2 hover:text-primary font-medium"
              href={nav.url}
            >
              {nav.icon && <nav.icon className="w-4 h-4" />}
              {nav.name}
            </Link>
          );
        })}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <AlignJustify className="w-7 md:hidden h-7" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {navigations.map((nav: Navigation, index: number) => {
            return (
              <DropdownMenuItem key={index}>
                <Link className="text-muted-foreground hover:text-primary" href={nav.url}>
                  {nav.name}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </m.header>
  );
};
