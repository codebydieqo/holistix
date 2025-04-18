"use server";

import { eq } from "drizzle-orm";
import { db } from "./db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { users } from "./db/schema";

export async function handleAuth(): Promise<{ success: boolean }> {
  const { userId } = await auth();

  const userExists = await db.query.users.findFirst({
    where: eq(users.userId, userId!),
  });

  if (!userExists) {
    const user = await currentUser();

    await db.insert(users).values({
      userId: userId!,
      email: user?.emailAddresses[0].emailAddress!,
      name: `${user?.firstName && user?.firstName} ${
        user?.lastName && user?.lastName
      }`,
    });
  }

  return { success: true };
}
