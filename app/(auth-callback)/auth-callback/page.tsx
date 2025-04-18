"use client";

import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { handleAuth } from "@/server/actions";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const { data } = useQuery({
    queryKey: ["auth-callback"],
    queryFn: async () => await handleAuth(),
    retry: true,
    retryDelay: 500,
  });
  const router = useRouter();

  if (data?.success) {
    router.push("/home");
  }
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-2">
      <Loader2 className="animate-spin" size={20} />
      <p className="font-[600]">Signing you in</p>
      <p>You will be redirected automatically</p>
    </div>
  );
}
