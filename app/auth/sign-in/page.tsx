import SignInButton from "@/components/actions/SignInButton";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div className=" w-full h-screen grid place-items-center">
      <SignInButton />
    </div>
  );
}
