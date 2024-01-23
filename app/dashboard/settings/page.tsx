import SubmitBtn from "@/components/actions/SubmitBtn";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React from "react";

export default function SettingsPage() {
  return (
    <main className=" bg-white rounded-md shadow p-3">
      <form action="">
        <div className=" flex justify-between items-center">
          <h1 className=" font-medium text-lg">Settings</h1>
          <SubmitBtn name={"Save"} className="" />
        </div>
        {/* <div className=" mt-5">
          <div className=" flex items-center space-x-2">
            <input type="checkbox" name="form_open" id="apply-form" />
            <Label htmlFor="apply-form">Apply Form Open</Label>
          </div>
        </div> */}
      </form>
    </main>
  );
}
