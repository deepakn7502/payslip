"use client";
import Link from "next/link";
import { useState } from "react";
import OTPInput from "react-otp-input";
import api from "axios";
import { useRouter } from "next/navigation";



export default function ForgotPassword() {
  const [eid, seteid] = useState("");
  const [otp, setOtp] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const [show, setshow] = useState(false);
  const { push } = useRouter();
  // const [ssid, setssid] = useState();

  let sendotp = async () => {
    if (eid) {
      const res = await api.put("staff/login/", {
        eid: eid,
        fn: "send_otp",
      });
      setshow(true);
    } else {
      alert("Enter Employee Id");
    }
  };

  let verify_otp = async () => {
    if (otp || pass || cpass) {
      if (pass === cpass) {
        try {
          var res = await api.put("staff/login/", {
            eid: eid,
            password: pass,
            fn: "verify_otp",
            otp: otp,
          });
          alert(res.data);
          push(`/`);
        } catch (err: any) {
          alert("Error:" + err.response.data.detail);
        }
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("Please enter all fields");
    }
  };
  // const
  // console.log(otp);
  return (
    <div className="h-96 bg-blue-950 w-96 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-around border-2 rounded-2xl border-blue-950 ">
      {/* <form className="h-96 bg-blue-950 w-96 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-around border-2 rounded-2xl border-blue-950 "> */}
      <h1 className="text-white text-2xl uppercase">Forgot Password</h1>

      {show ? (
        <div>
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
            onChange={(e) => {
              setpass(e.target.value);
            }}
          />
          <input
            className="h-14 w-10/12 px-4 text-black border-2 border-blue-950 rounded-lg"
            placeholder="Confirm Password"
            onChange={(e) => {
              setcpass(e.target.value);
            }}
          />
          <button
            className="bg-yellow-300 px-4 py-2 rounded text-black"
            // type="submit"
            onClick={verify_otp}
          >
            Update
          </button>
        </div>
      ) : (
        <div className="">
          <input
            className="h-14 w-10/12 px-4 text-black border-2 border-blue-950 rounded-lg"
            placeholder="Employee Id"
            onChange={(e) => {
              seteid(e.target.value);
            }}
          />
          <button
            className="bg-yellow-300 px-4 py-2 rounded text-black"
            onClick={sendotp}
          >
            Send otp
          </button>
        </div>
      )}

      <Link className="text-white hover:underline" href="/">
        Login
      </Link>
      {/* </form> */}
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
