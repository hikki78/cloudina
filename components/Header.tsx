/* eslint-disable react/jsx-no-undef */
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from the 'next/image' package.
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <header className="flex items-centre justify-between">
      <Link href="/" className="flex items-center space-x-1">
        <div className=" bg-slate-300 w-fit">
          <Image
            src="https://www.shareicon.net/data/128x128/2015/08/19/87824_shinkgeki-no-kyojin_129x129.png"
            alt="Cloudnana Logo"
            //className="invert"
            height={50}
            width={50}
          />
        </div>
        <h1 className="font-bold text">Cloudina</h1>
      </Link>

      <div className="px-5 flex space-x-3 items-center">
        {/*Theme Toggler*/}
        <ThemeToggler />
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
