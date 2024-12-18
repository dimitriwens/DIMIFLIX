"use client";

import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { Trash2 } from "lucide-react";

import { cn } from "@/lib/utils";

import { toast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { ProfilesProps } from "./Profiles.types";
import { AddProfile } from "./AddProfile";
import { useRouter } from "next/navigation";
import { useCurrentNetflixUser } from "@/hooks/use-current-user";
import { UserNetflix } from "@prisma/client";

export function Profiles(props: ProfilesProps) {
  const { users } = props;
  const { changeCurrentUser } = useCurrentNetflixUser();

  const [manageProfiles, setManageProfiles] = useState(false);
  const router = useRouter();

  const onClickUser = (user: UserNetflix) => {
    changeCurrentUser(user);
    
  };

  const deleteUser = async (userIdNetflix: string) => {
    try {
      axios.delete("/api/userNetflix", { data: { userIdNetflix } });
      setManageProfiles(false);
      toast({ title: "User successfully deleted!" });
      router.push("/profiles");

    } catch (error) {
      console.log(error);
      toast({ title: "An error has occured", variant: "destructive" });
    }
  };

  return (
    <section>
      <div className="flex gap-7 items-center justify-center">
        {users.map((user) => (
          <div
            key={user.id}
            className="text-center relative cursor-pointer"
            onClick={() => onClickUser(user)}
          >
            <Image
              src={user.avatarUrl || ""}
              alt={`Profile Image ${user.profileName}`}
              width={140}
              height={140}
              className={cn(
                manageProfiles ? "blur-md" : "",
                "border-transparent hover:border-2 hover:border-white rounded-md"
              )}
            />
            <p className="mt-2 text-gray-500 text-lg">
              {user.profileName}
            </p>

            <div
              className={cn(
                "top-14 cursor-pointer w-full flex gap-4 items-center justify-center z-20",
                manageProfiles ? "absolute" : "hidden"
              )}
            >
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="bg-white rounded-full hover:bg-red-100 p-1">
                    <Trash2 className="w-6 h-6 text-red-500" />
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-zinc-900">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to delete your profile?
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      className="text-red-500 border-red-500 border"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}

        <AddProfile />
      </div>

      <div className="mt-4 flex flex-col items-center justify-center text-center">
        <Button
          variant="outline"
          size="lg"
          className="text-gray-500 border-gray-500 mt-4"
          onClick={() => setManageProfiles(!manageProfiles)}
        >
          Manage profiles
        </Button>
      </div>
    </section>
  );
}