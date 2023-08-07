"use client";
import Link from "next/link";
import { useState } from "react";
import OTPInput from "react-otp-input";
export default function ForgotPassword() {
  const [otp, setOtp] = useState("");
  console.log(otp);
  return (
    <div>
      <form className="h-96 bg-blue-950 w-96 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-around border-2 rounded-2xl border-blue-950 ">
        <h1 className="text-white text-2xl uppercase">Forgot Password</h1>
        <OTPInput
          inputStyle="otp-container"
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} className="h-8" />}
        />
        <input
          className="h-14 w-10/12 px-4 text-black border-2 border-blue-950 rounded-lg"
          placeholder="New Password"
        />
        <input
          className="h-14 w-10/12 px-4 text-black border-2 border-blue-950 rounded-lg"
          placeholder="Confirm Password"
        />
        <button
          className="bg-yellow-300 px-4 py-2 rounded text-black"
          type="submit"
        >
          Update
        </button>
        <Link className="text-white hover:underline" href="/">
          Login
        </Link>
      </form>
    </div>
  );
}

// className="bg-[url('/images/vivid-blurred.jpg')]"

// type Repository {
//   id: number;
//   name: string;
//   full_name: string;
//   };
//   export default async function Page() {
//   | const res = await fetch('https://api.github.com/
//   repos/vercel/next.js');
//   const data: Repository await res.json();
//   return <h1>{data.full_name}</h1>;
//   }
