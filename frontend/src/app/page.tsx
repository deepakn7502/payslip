"use client"
import Link from "next/link";
import { useState } from "react";
// import api from "./axios";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
const [username, setUser] = useState("");
const [password, setpass] = useState("");
const { push } = useRouter();

const api = axios.create({
  baseURL: `http://localhost:8000/`,
});


let login = async () => {
  // e.preventDefault();

  if (username && password) {
   
    try {
      const res = await api.post("staff/login/", {
        username: username,
        password: password,
      });
      sessionStorage.setItem("access_token", res.data["access_token"]);
      sessionStorage.setItem("refresh_token", res.data["refresh_token"]);
      const user = res.data["user"];
      if (user === "admin") {
        push(`/admin`);
      } else {
      sessionStorage.setItem("eid", res.data["eid"]);
        push(`/staff/${res.data["name"]}`);
      }
    } catch (e : any) {
      alert(e.response.data.detail);
    }
  } else {
    alert("Please enter your credentials!");
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
            setUser(e.target.value)
          }}
        />
        <input
          className="h-14 w-10/12 px-4 text-black border-2 border-blue-950 rounded-lg"
          placeholder="Password"
          onChange={(e) => {
            setpass(e.target.value)
          }}
        />
        <button
          className="bg-yellow-300 px-4 py-2 rounded text-black"
          type="submit"
        >
          Login
        </button>
        <Link className="text-white hover:underline" href="/forgot-password">
          Forgot Password?
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
