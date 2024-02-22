import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "components/ui/button";
import { ArrowRight, Link } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-centre  bg-indigo-800 bg-indigo-950 ">
        <div className="p-10 flex flex-col bg-indigo-800 bg-indigo-900 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Cloudina <br />
            <br />
            Storing everything for your needs became easy.
          </h1>

          <p className="pb-20">
            Enhance your peronsal storage with us. We provide simple and
            efficient way to upload, organise and access your files from
            anywhere. Securely store all your important documents and media, and
            experience the convenience of one stop solution for all your storage
            needs.
          </p>

          <a
            href="/dashboard"
            className="flex cursor-pointer bg-blue-500 bg-blue-500 p-3 items-center w-fit rounded text-white mt-2"
          >
            try it !!
            <ArrowRight className="ml-2" />
          </a>
        </div>
        <div className=" bg-indigo-950 h-full  p-10">
          <video autoPlay loop muted className="rounded-lg items-center">
            <source src="https://i.imgur.com/27tjGk3.mp4" type="video/mp4" />
          </video>
          <h1 className="text-2xl font-bold w-fit rounded-lg text-white mt-2">
            <br />
            Storing is smart, easy and free as it should always be :) <br />
          </h1>
        </div>
      </div>
    </main>
  );
}
