import { ReactNode } from "react";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: ReactNode }) {
  const { userId } = await auth();

  if (userId) redirect("/home");
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full relative">
        <Image fill className="object-cover" src="/auth.jpg" alt="" />
      </div>
      {children}
    </div>
  );
}
