"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { FormAddProfile } from "../../FormAddProfile";


export function AddProfile() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="group hover:cursor-pointer flex flex-col items-center">
          <div
            className="w-[140px] h-[140px] flex flex-col justify-center items-center
           group-hover:bg-slate-300 rounded-md"
          >
            <PlusCircle className="w-16 h-16 text-gray-500" />
          </div>
          <p className="mt-2 text-gray-500 text-lg text-center">Add profile</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black">
        <DialogHeader>
          <DialogTitle>Add profile</DialogTitle>
          <DialogDescription>
            Add different profiles to your app
          </DialogDescription>
        </DialogHeader>
        <FormAddProfile setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
