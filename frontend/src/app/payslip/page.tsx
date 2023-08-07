import Image from "next/image";
import React from "react";

export default function PDF() {
  return (
    <div className="h-screen w-full bg-blue-950">
      <div className="bg-white w-[1100px] mx-auto my-10">
        <table>
          <thead className="">
            <tr>
              <td rowSpan={6} colSpan={2}>
                <Image
                  src={require("../images/logo.jpg")}
                  alt="Logo"
                  width={1000}
                  height={1000}
                  className="h-24 w-auto"
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>PANIMALAR ENGINEERING COLLEGE</td>
            </tr>
            <tr>
              <td>(An Autonomous Institution)</td>
            </tr>
            <tr>
              <td>Jaisakthi Educational Trust</td>
            </tr>
            <tr>
              <td>Chennai - 600123</td>
            </tr>
            <tr>
              <td>PaySlip for the Month of August 2023</td>
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
              <td colSpan={2}>earnings()</td>
              <td colSpan={2}>deductions()</td>
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
                  total earnings<span>21749</span>
                </h1>
              </td>
              <td colSpan={2}>
                <h1>
                  total deductions<span>2504</span>
                </h1>
              </td>
            </tr>
            <tr>
              <td colSpan={4}>
                <h1>
                  net salary() <span>19245</span>
                </h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
