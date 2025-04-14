import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import NavLink from "./nav-link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export default function Header() {
 
  return (
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
      <div className="">
        <NavLink href="/">
          <span className="flex items-center">
            <FileText className="text-gray-900 h-5 lg:h-6 ml-2 transition duration-150 ease-in-out transform hover:rotate-12" />
            <span className="text-xl lg:text-2xl font-semibold tracking-tight">
              PDFuse
            </span>
          </span>
        </NavLink>
      </div>
      <div className="flex items-center gap-4 lg:justify-center lg:flex-1">
        <NavLink href="/#pricing">Pricing</NavLink>
       <SignedIn>
        <NavLink href="/dashboard"> Your Summaries</NavLink>
        </SignedIn>
      </div>
      <div className=" flex lg:justify-end lg:flex-1">
        <SignedIn>

        <div className="flex gap-2 items-center">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <div>pro</div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </SignedIn>
          
          
          <SignedOut>
              <NavLink href="/sign-in">Sign In</NavLink>
            </SignedOut>
      </div>
    </nav>
  );
}
