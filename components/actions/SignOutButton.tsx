"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <Button onClick={handleSignOut} className=" absolute bottom-3 w-full">
      Log out
    </Button>
  );
}
