import Link from "next/link";

import { Checkbox } from "@/components/ui/checkbox";

import { Terms } from "../components/Terms";
import { LoginForm } from "./LoginForm";

export default async function LoginPage(){
    return (
  <div>
    <p className="text-3xl font-bold text-left mb-7 ">Log in</p>
    
    <LoginForm />
    <div className="mt-5 text-center">
      <Link href="/" className="hover:underline hover:opacity-70 text-xs">
      Have you forgotten your password?
      </Link>
    </div>

    <div className="flex items-center space-x-2 mt-4">
<Checkbox id="terms" className="border-white" />
<label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs">
Remember me
</label>
    </div>

    <div className="mt-4 flex gap-1 items-center text-xs">
      <p className="text-white opacty-70 ">Not yet a member of DIMIFLIX?</p>
      <Link href="/register" className="opacity-1  ml-2  text-red-500 font-bold text-sm">
      Register now
      </Link>
    </div>

    <Terms />
    </div>
    );
  }
