"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn({
  name,
  className,
}: {
  name: any;
  className: string;
}) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className={className}>
      {pending ? (
        <Loader2 color="#fff" className=" animate-spin" size={20} />
      ) : (
        name
      )}
    </Button>
  );
}
