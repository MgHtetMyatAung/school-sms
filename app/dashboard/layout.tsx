import Header from "@/components/layout/header/Header";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className=" flex">
          <div className=" lg:w-[250px]">
            <Sidebar />
          </div>
          <div className=" flex-grow relative bg-gray-100 max-h-screen overflow-y-scroll">
            <Header />
            <div className="p-3 h-screen">{children}</div>
          </div>
        </div>
        <Toaster />
      </ThemeProvider>
    </section>
  );
}
