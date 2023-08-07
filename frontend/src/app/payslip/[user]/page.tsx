import Image from "next/image";
import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import image from "../../images/pec-logo.png";
import { Blinker } from "next/font/google";
import { Avatar } from "@mui/material";

const blinker = Blinker({
  weight: ["400"],
  subsets: ["latin"],
  style: "normal",
});
interface Params {
  params: { user: string };
}
export default function PDF({ params }: Params) {
  return (
    <div className="h-screen w-full bg-blue-950">
      <div className="bg-blue-950 h-[75px]  text-white w-full grid grid-cols-11 items-center text-center">
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
          <Avatar src="/broken-image.jpg" />
          <p className="text-xl">{params.user.replace("%20", " ")}</p>
          <ExitToAppIcon
            fontSize="large"
            className="cursor-pointer"
          ></ExitToAppIcon>
        </div>
      </div>
      <div className="bg-white h-fit w-[950px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl">
        <table className="w-11/12 mx-auto my-10 grid grid-cols-1">
          <thead className="w-full text-center grid grid-cols-6  place-items-center">
            <tr className="col-start-1 col-end-2 row-start-1 row-end-6">
              <td>
                <Image
                  src={require("../../images/logo.jpg")}
                  alt="Logo"
                  width={1000}
                  height={1000}
                  className="w-11/12 h-auto"
                />
              </td>
            </tr>
            <tr className=" col-start-2 col-end-7">
              <td className="font-bold text-3xl">
                <h1>PANIMALAR ENGINEERING COLLEGE</h1>
              </td>
            </tr>
            <tr className=" col-start-2 col-end-7">
              <td className="text-xs">
                <h1>(An Autonomous Institution)</h1>
              </td>
            </tr>
            <tr className=" col-start-2 col-end-7">
              <td className="text-sm">
                <h1>Jaisakthi Educational Trust</h1>
              </td>
            </tr>
            <tr className=" col-start-2 col-end-7">
              <td className="text-xs">
                <h1>Chennai - 600123</h1>
              </td>
            </tr>
            <tr className=" col-start-2 col-end-7">
              <td className="text-base font-bold">
                <h1>PaySlip for the Month of August 2023</h1>
              </td>
            </tr>
          </thead>
          <tbody className="border-2 border-black">
            <tr className="grid grid-cols-4">
              <td className="col-span-2">
                <h1>Name:</h1>
                <p>Anandha simha m</p>
              </td>
              <td className="col-span-1">
                <h1>
                  EMPID:
                  <p>PECMEC0057</p>
                </h1>
              </td>
              <td className="col-span-1">
                <h1>
                  A/C No:
                  <p>920010002624855</p>
                </h1>
              </td>
            </tr>
            <tr className="grid grid-cols-4">
              <td className="col-span-2">
                <h1>
                  Department :<p>MECH</p>
                </h1>
              </td>
              <td className="col-span-1">
                <h1>
                  Bank
                  <p>Axis bank</p>
                </h1>
              </td>
              <td className="col-span-1">
                <h1>
                  branch
                  <p>kilpauk</p>
                </h1>
              </td>
            </tr>
            <tr className="grid grid-cols-4">
              <td className="col-span-2">
                <h1>
                  designation
                  <p>asst.professor(lab)</p>
                </h1>
              </td>
              <td className="col-span-1">
                <h1>
                  pan
                  <p>ABCD1234E</p>
                </h1>
              </td>
              <td className="col-span-1">
                <h1>
                  uan
                  <p>101464899043</p>
                </h1>
              </td>
            </tr>
            <tr className="grid grid-cols-2">
              <td className="col-span-1 text-center">
                <h1>earnings(₹)</h1>
              </td>
              <td className="col-span-1 text-center">
                <h1>deductions(₹)</h1>
              </td>
            </tr>
            <tr className="grid grid-cols-4 ">
              <td>
                <tr>
                  <h1>
                    basic pay-
                    <p>8841</p>
                  </h1>
                </tr>
                <tr>
                  <h1>
                    da
                    <p>12024</p>
                  </h1>
                </tr>
                <tr>
                  <h1>
                    leave
                    <p>0.00</p>
                  </h1>
                </tr>
              </td>
              <td>
                <tr>
                  <h1>
                    basic-1-
                    <p>8841</p>
                  </h1>
                </tr>
                <tr>
                  <h1>
                    hra
                    <p>884</p>
                  </h1>
                </tr>
                <tr>
                  <h1>
                    <p>-</p>
                  </h1>
                </tr>
              </td>
              <td>
                <tr>
                  <h1>
                    p f<p>2504</p>
                  </h1>
                </tr>
                <tr>
                  <h1>
                    p t<p>0</p>
                  </h1>
                </tr>
                <tr>
                  <h1>
                    i t<p>0</p>
                  </h1>
                </tr>
              </td>
              <td>
                <tr>
                  <h1>miscellaneous-</h1>
                  <p>0</p>
                </tr>
                <tr>
                  <h1>esi-</h1>
                  <p>0</p>
                </tr>
                <tr>
                  <h1>deductions -</h1>
                  <p>0</p>
                </tr>
              </td>
            </tr>
            <tr className="grid grid-cols-2">
              <td className="col-span-1 text-center">
                <h1>total earnings:</h1>
                <p>21749</p>
              </td>
              <td className="col-span-1 text-center">
                <h1>total deductions:</h1>
                <p>2504</p>
              </td>
            </tr>
            <tr className="grid grid-cols-1">
              <td className="text-center">
                <h1>net salary(₹)</h1>
                <p>19245</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
