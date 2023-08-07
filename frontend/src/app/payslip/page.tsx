import Image from "next/image";
import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import image from "../images/pec-logo.png";
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
      <div className="bg-blue-950 h-[75px] w-full grid grid-cols-11 items-center text-center">
        <Image
          src={image}
          alt="Logo"
          height={200}
          width={200}
          priority={true}
          className="col-span-2 "
        />

        <h1
          className={` ${blinker.className} col-start-4 col-end-9 text-[37px] font-[]`}
        >
          PANIMALAR ENGINEERING COLLEGE
        </h1>
        <div className="col-start-10 col-end-13 flex items-center justify-around ">
          <Avatar src="/broken-image.jpg" />
          {/* <p className="text-xl">{params.user.replace("%20", " ")}</p> */}
          <p className="text-xl">P</p>
          <ExitToAppIcon
            fontSize="large"
            className="cursor-pointer"
          ></ExitToAppIcon>
        </div>
      </div>
      <div className="bg-white h-fit w-[950px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl">
        <table className="w-11/12 mx-auto my-10">
          <thead className="w-full text-center">
            <tr>
              <td rowSpan={6}>
                <Image
                  src={require("../images/logo.jpg")}
                  alt="Logo"
                  width={1000}
                  height={1000}
                  className="h-24 w-auto"
                />
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="font-bold text-2xl">
                <h1>PANIMALAR ENGINEERING COLLEGE</h1>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="text-xs">
                <h1>(An Autonomous Institution)</h1>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="text-sm">
                <h1>Jaisakthi Educational Trust</h1>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="text-xs">
                <h1>Chennai - 600123</h1>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="text-base font-bold">
                <h1>PaySlip for the Month of August 2023</h1>
              </td>
            </tr>
          </thead>
          <tbody className="border-2 border-black">
            <tr>
              <td colSpan={2}>
                <h1>
                  Name:
                  <span>Anandha simha m</span>
                </h1>
              </td>
              <td>
                <h1>
                  EMPID:
                  <span>PECMEC0057</span>
                </h1>
              </td>
              <td>
                <h1>
                  A/C No:
                  <span>920010002624855</span>
                </h1>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <h1>
                  Department
                  <span>MECH</span>
                </h1>
              </td>
              <td>
                <h1>
                  Bank
                  <span>Axis bank</span>
                </h1>
              </td>
              <td>
                <h1>
                  branch
                  <span>kilpauk</span>
                </h1>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <h1>
                  designation
                  <span>asst.professor(lab)</span>
                </h1>
              </td>
              <td>
                <h1>
                  pan
                  <span>ABCD1234E</span>
                </h1>
              </td>
              <td>
                <h1>
                  uan
                  <span>101464899043</span>
                </h1>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <h1>earnings(₹)</h1>
              </td>
              <td colSpan={2}>
                <h1>deductions(₹)</h1>
              </td>
            </tr>
            <tr>
              <td>
                <tr>
                  <h1>
                    basic pay-
                    <span>8841</span>
                  </h1>
                </tr>
                <tr>
                  <h1>
                    da
                    <span>12024</span>
                  </h1>
                </tr>
                <tr>
                  <h1>
                    leave
                    <span>0.00</span>
                  </h1>
                </tr>
              </td>
              <td>
                <tr>
                  <h1>
                    basic-1-
                    <span>8841</span>
                  </h1>
                </tr>
                <tr>
                  <h1>
                    hra
                    <span>884</span>
                  </h1>
                </tr>
                <tr>
                  <h1>
                    <span>-</span>
                  </h1>
                </tr>
              </td>
              <td>
                <tr>
                  <h1>
                    p f<span>2504</span>
                  </h1>
                </tr>
                <tr>
                  <h1>
                    p t<span>0</span>
                  </h1>
                </tr>
                <tr>
                  <h1>
                    i t<span>0</span>
                  </h1>
                </tr>
              </td>
              <td>
                <tr>
                  <h1>
                    miscellaneous-
                    <span>0</span>
                  </h1>
                </tr>
                <tr>
                  <h1>
                    esi-
                    <span></span>
                  </h1>
                </tr>
                <tr>
                  <h1>
                    deductions -<span></span>
                  </h1>
                </tr>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <h1>
                  total earnings: <span>21749</span>
                </h1>
              </td>
              <td colSpan={2}>
                <h1>
                  total deductions: <span>2504</span>
                </h1>
              </td>
            </tr>
            <tr>
              <td colSpan={4}>
                <h1>
                  net salary(₹) <span>19245</span>
                </h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
