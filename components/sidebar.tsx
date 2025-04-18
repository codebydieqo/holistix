"use client";

import { cn, montserrat } from "@/lib/utils";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-1/5 h-screen border-r py-5 pr-5 flex flex-col justify-between items-center">
      <div className="flex flex-col gap-5 justify-start items-start w-full">
        <Link href="/home" className={cn("text-4xl", montserrat.className)}>
          Holistix
        </Link>
        {NAV_LINKS.map((i) => (
          <Link href={i.href} key={i.id} className="w-full">
            <Button
              className="w-full flex justify-start cursor-pointer"
              variant={pathname === i.href ? "secondary" : "ghost"}
            >
              <i.icon />
              {i.label}
            </Button>
          </Link>
        ))}
      </div>
      <SignOutButton>
        <Button
          variant={"destructive"}
          className="w-full flex justify-start cursor-pointer"
        >
          <LogOutIcon />
          Sign Out
        </Button>
      </SignOutButton>
    </div>
  );
}
