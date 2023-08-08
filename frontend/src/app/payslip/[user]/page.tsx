import Image from "next/image";
import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import image from "../../images/pec-logo.png";
import { Blinker } from "next/font/google";
import { Avatar } from "@mui/material";
import Navbar from "@/components/Navbar";

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
      <Navbar params={params} />
      <div className="bg-white h-fit w-[950px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl">
        <table className="w-11/12 mx-auto my-10 grid grid-cols-1">
          <thead className="w-full text-center grid grid-cols-6  place-items-center">
            <tr className="col-start-1 col-end-2 row-start-1 row-end-6">
              <th>
                <Image
                  src={require("../../images/logo.jpg")}
                  alt="Logo"
                  width={1000}
                  height={1000}
                  className="w-11/12 h-auto"
                />
              </th>
            </tr>
            <tr className="col-start-2 col-end-7">
              <th className="font-bold text-3xl">
                <h1>PANIMALAR ENGINEERING COLLEGE</h1>
              </th>
            </tr>
            <tr className="col-start-2 col-end-7">
              <th className="font-normal text-xs">
                <h1>(An Autonomous Institution)</h1>
              </th>
            </tr>
            <tr className="col-start-2 col-end-7">
              <th className="font-normal text-lg">
                <h1>Jaisakthi Educational Trust</h1>
              </th>
            </tr>
            <tr className="col-start-2 col-end-7">
              <th className="font-normal text-xs">
                <h1>Chennai - 600123</h1>
              </th>
            </tr>
            <tr className="col-start-2 col-end-7">
              <th className="text-base font-bold">
                <h1>PaySlip for the Month of August 2023</h1>
              </th>
            </tr>
          </thead>
          <tbody className="border-2 border-black">
            <tr className="grid grid-cols-4">
              <td className="col-span-2">
                <h1>Name:</h1>
                <p>Anandha simha m</p>
              </td>
              <td className="col-span-1">
                <h1>EMPID:</h1>
                <p>PECMEC0057</p>
              </td>
              <td className="col-span-1">
                <h1>A/C No:</h1>
                <p>920010002624855</p>
              </td>
            </tr>
            <tr className="grid grid-cols-4">
              <td className="col-span-2">
                <h1>Department:</h1>
                <p>MECH</p>
              </td>
              <td className="col-span-1">
                <h1>Bank:</h1>
                <p>Axis bank</p>
              </td>
              <td className="col-span-1">
                <h1>branch:</h1>
                <p>kilpauk</p>
              </td>
            </tr>
            <tr className="grid grid-cols-4">
              <td className="col-span-2">
                <h1>designation:</h1>
                <p>asst.professor(lab)</p>
              </td>
              <td className="col-span-1">
                <h1>pan:</h1>
                <p>ABCD1234E</p>
              </td>
              <td className="col-span-1">
                <h1>uan:</h1>
                <p>101464899043</p>
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
                <tr className="">
                  <h1>basic pay-</h1>
                  <p>8841</p>
                </tr>
                <tr className="">
                  <h1>da</h1>
                  <p>12024</p>
                </tr>
                <tr className="">
                  <h1>leave</h1>
                  <p>0.00</p>
                </tr>
              </td>
              <td>
                <tr className="">
                  <h1>basic pay-1-</h1>
                  <p>8841</p>
                </tr>
                <tr className="">
                  <h1>hra</h1>
                  <p>884</p>
                </tr>
                <tr className="">
                  <h1></h1>
                  <p></p>
                </tr>
              </td>
              <td>
                <tr className="">
                  <h1>p f</h1>
                  <p>2504</p>
                </tr>
                <tr className="">
                  <h1>p t</h1>
                  <p>0</p>
                </tr>
                <tr className="">
                  <h1>i t</h1>
                  <p>0</p>
                </tr>
              </td>
              <td>
                <tr className="">
                  <h1>miscellaneous-</h1>
                  <p>0</p>
                </tr>
                <tr className="">
                  <h1>esi-</h1>
                  <p>0</p>
                </tr>
                <tr className="">
                  <h1>deductions -</h1>
                  <p>0</p>
                </tr>
              </td>
            </tr>
            <tr className="grid grid-cols-2">
              <td className="col-span-1 text-center grid-cols-2">
                <h1>total earnings(₹):</h1>
                <p>21749</p>
              </td>
              <td className="col-span-1 text-center grid-cols-2">
                <h1>total deductions(₹):</h1>
                <p>2504</p>
              </td>
            </tr>
            <tr className="grid grid-cols-1">
              <td className="text-center grid-cols-4">
                <h1 className="col-start-2">net salary(₹)</h1>
                <p>19245</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
