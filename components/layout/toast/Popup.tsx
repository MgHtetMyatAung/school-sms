"use client";
import { useToast } from "@/components/ui/use-toast";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function Popup({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const delParam = useCallback(() => {
    const url = new URLSearchParams(searchParams.toString());
    url.delete("status");
    router.push(`${pathname}?${url.toString()}`);
  }, [router, pathname, searchParams]);

  useEffect(() => {
    const status = searchParams.get("status");
    if (status == "true") {
      toast({
        title,
        description,
        className: " border-b-4 border-b-green-600",
      });
      delParam();
    }
  }, [delParam, searchParams, toast, title, description]);
  return null;
}
