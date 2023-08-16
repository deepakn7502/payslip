"use client";
import Link from "next/link";
import { useState } from "react";
// import api from "./axios";
import axios from "axios";
import { useRouter } from "next/navigation";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert } from "@mui/material";

export default function Login() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [username, setUser] = useState("");
  const [password, setpass] = useState("");
  const [open, setopen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [type, setType] = useState<any>("");
  const { push } = useRouter();

  const api = axios.create({
    baseURL: `http://localhost:8000/`,
  });

  
  let timebar = () => {
    let progressTimeout: any;
    let dismissTimeout: any;
    const startDismissTimer = () => {
      dismissTimeout = setTimeout(() => {
        setOpenAlert(false);
      }, 3000);
    };
    startDismissTimer();
    return () => {
      clearInterval(progressTimeout);
      clearTimeout(dismissTimeout);
    };
  };

  let login = async () => {
    // e.preventDefault();

    if (username && password) {
      try {
        const res = await api.post("staff/login/", {
          username: username,
          password: password,
        });

        const user = res.data["user"];
        if (user === "admin") {
          sessionStorage.setItem("access_token", res.data["access_token"]);
          sessionStorage.setItem("refresh_token", res.data["refresh_token"]);
          push(`/admin`);
        } else {
          sessionStorage.setItem("eid", res.data["eid"]);
          sessionStorage.setItem("access_token", res.data["access_token"]);

          push(`/staff/${res.data["name"]}`);
        }
      } catch (e: any) {
        setopen(false);
        setAlertContent(e.response.data.detail);
        setType("error");
        setOpenAlert(true);
        timebar();
      }
    } else {
      setopen(false);
      setAlertContent("Fields Cannot Be Empty!!!");
      setType("error");
      setOpenAlert(true);
      timebar();
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
        className="h-96 bg-blue-950 w-96 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-around border-2 rounded-2xl border-blue-950 "
      >
        <h1 className="text-white text-3xl uppercase">login</h1>
        <input
          className="h-14 w-10/12 px-4 text-black border-2 border-blue-950 rounded-lg"
          placeholder="Username"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input
          className="h-14 w-10/12 px-4 text-black border-2 border-blue-950 rounded-lg"
          placeholder="Password"
          onChange={(e) => {
            setpass(e.target.value);
          }}
        />
        <button
          className="bg-yellow-300 px-4 py-2 rounded text-black"
          type="submit"
        >
          Login
        </button>
        <Backdrop
          sx={{
            color: "rgb(255,0,0)",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open}
        >
          <CircularProgress color="primary" />
        </Backdrop>
        <Link className="text-white hover:underline" href="/forgot-password">
          Forgot Password?
        </Link>
      </form>
      {openAlert ? (
        <Alert
          variant="filled"
          severity={type}
          sx={{
            top: "13%",
            right: "1%",
            width: "auto",
            position: "absolute",
            fontSize: "18px",
            zIndex: 100,
          }}
          onClose={() => {
            setOpenAlert(false);
          }}
        >
          {alertContent}
        </Alert>
      ) : (
        <></>
      )}
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
