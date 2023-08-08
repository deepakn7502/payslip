"use client";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
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

const api = axios.create({
  baseURL: `http://localhost:8000/`,
});

export default function PDF({ params }: Params) {
  const [data, setdata] = useState([]);

  let getdata = async () => {
    let res = await api.get("staff/validate/");
    console.table(res.data);
    setdata(res.data);
  };

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
              <th className="font-normal text-sm">
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
                <h1>Department :</h1>
                <p>MECH</p>
              </td>
              <td className="col-span-1">
                <h1>Bank</h1>
                <p>Axis bank</p>
              </td>
              <td className="col-span-1">
                <h1>branch</h1>
                <p>kilpauk</p>
              </td>
            </tr>
            <tr className="grid grid-cols-4">
              <td className="col-span-2">
                <h1>designation</h1>
                <p>asst.professor(lab)</p>
              </td>
              <td className="col-span-1">
                <h1>
                  pan
                  <p>ABCD1234E</p>
                </h1>
              </td>
              <td className="col-span-1">
                <h1>uan</h1>
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
                <tr>
                  <h1>basic pay-</h1>
                  <p>8841</p>
                </tr>
                <tr>
                  <h1>da</h1>
                  <p>12024</p>
                </tr>
                <tr>
                  <h1>leave</h1>
                  <p>0.00</p>
                </tr>
              </td>
              <td>
                <tr>
                  <td>
                    <h1>basic-1-</h1>
                    <p>8841</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h1>hra</h1>
                    <p>884</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h1>-</h1>
                    <p>-</p>
                  </td>
                </tr>
              </td>
              <td>
                <tr>
                  <td>
                    <h1>p f</h1>
                    <p>2504</p>
                  </td>
                </tr>
                <tr>
                  <h1>p t</h1>
                  <p>0</p>
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
