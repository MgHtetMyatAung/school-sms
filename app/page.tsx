import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-full h-screen grid place-items-center bg-gray-200">
      <div className=" space-y-2 text-center">
        <h1 className=" text-3xl font-medium mb-10">
          School Management System
        </h1>
        <Link href={"/dashboard"}>
          <Button>Go to Dashboard</Button>
        </Link>
      </div>
    </main>
  );
}
