"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignInButton() {
  const handleSignIn = async () => {
    await signIn("google");
  };
  return (
    <Button onClick={handleSignIn} className=" flex items-center gap-3">
      <Image src={"/google.png"} alt="google" width={20} height={20} /> Sign in
      with Google
    </Button>
  );
}
