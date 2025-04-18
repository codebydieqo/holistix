import { auth } from "@clerk/nextjs/server";
import { db } from "@/server/db";
import { eq } from "drizzle-orm";
import { users } from "@/server/db/schema";

export default async function Home() {
  const { userId } = await auth();
  const user = await db.query.users.findFirst({
    where: eq(users.userId, userId!),
  });

  if (user)
    return (
      <div className="w-full space-y-5 py-5 pl-5">
        <div className="space-y-1">
          <p className="text-2xl font-[600]">Dashboard</p>
          <p className="text-muted-foreground text-sm">Overview of your day</p>
        </div>
        <div className="w-full rounded-xl border-4 bg-white/5 p-5 space-y-1">
          <p className="text-2xl font-[600]">
            Welcome {user.name?.replace("null", "")},
          </p>
          <p>Here's your wellness overview for today.</p>
        </div>
        <div className="w-full flex gap-5">
          <div className="w-full h-[400px] border-2 rounded-xl"></div>
          <div className="w-full h-[400px] border-2 rounded-xl"></div>
          <div className="w-full h-[400px] border-2 rounded-xl"></div>
        </div>
      </div>
    );
}
