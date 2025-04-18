import MaxWidthWrapper from "@/components/max-width-wrapper";
import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <MaxWidthWrapper className="flex">
      <Sidebar />
      <main className="w-4/5 h-screen">{children}</main>
    </MaxWidthWrapper>
  );
}
