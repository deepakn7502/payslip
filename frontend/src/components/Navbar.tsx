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

function stringToColor(string: any) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string?.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 6) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: any) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      height: "50px",
      width: "50px",
    },
    children: `${name ? name[0][0] : ""}`,
  };
}



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
        <Avatar {...stringAvatar(params.user.replace("%20", " "))} />
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
