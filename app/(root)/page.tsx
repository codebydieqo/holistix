import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { montserrat } from "@/lib/utils";

export default function Home() {
  return (
    <div className="w-1/2 h-full flex flex-col gap-4 justify-center items-center relative">
      <ModeToggle className="absolute top-5 right-5" />
      <p className={cn("text-5xl font-[600]", montserrat.className)}>
        Holistix
      </p>
      <p className="text-sm text-muted-foreground">
        Healthy habits and meal planning made easy.
      </p>
      <div className="space-x-4">
        <SignInButton mode="modal" forceRedirectUrl={"/auth-callback"}>
          <Button className="w-[200px] cursor-pointer" variant={"outline"}>
            Sign In
          </Button>
        </SignInButton>
        <SignUpButton mode="modal" forceRedirectUrl={"/auth-callback"}>
          <Button className="w-[200px] cursor-pointer">
            Get Started <ArrowRight size={15} />
          </Button>
        </SignUpButton>
      </div>
    </div>
  );
}
