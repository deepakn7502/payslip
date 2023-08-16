"use client";
import Image from "next/image";
import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import image from "../app/images/pec-logo.png";
import { Blinker } from "next/font/google";
import { Avatar } from "@mui/material";
import api from "axios";
import { useRouter } from "next/navigation";

const blinker = Blinker({
  weight: ["400"],
  subsets: ["latin"],
  style: "normal",
});

export default function Navbar({ params }: any) {
  const { push } = useRouter();

  let logout = () => {
    sessionStorage.clear();
    push("/");
  };

  return (
    <div className="bg-blue-950 h-[75px]  text-white w-full grid grid-cols-11 items-center text-center shadow-custom">
      <Image
        src={image}
        alt="Logo"
        height={200}
        width={200}
        priority={true}
        className="col-span-2 "
      />

      <h1
        className={` ${blinker.className}   col-start-4 col-end-9 text-[50px] font-[]`}
      >
        PAYCHECK SLIPS
      </h1>
      <div className="col-start-10 col-end-13 flex items-center justify-around ">
        <Avatar src="../app/images/tobi.png" />
        <p className="text-xl capitalize">{params.user.replace("%20", " ")}</p>
        <ExitToAppIcon
          onClick={logout}
          fontSize="large"
          className="cursor-pointer"
        />
        {/* </ExitToAppIcon> */}
      </div>
    </div>
  );
}
