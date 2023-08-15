/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const api = axios.create({
  baseURL: `http://localhost:8000/`,
});

// eslint-disable-next-line react-hooks/rules-of-hooks
const [username, setUser] = useState<any>("");
const [password, setpass] = useState<any>("");
const { push } = useRouter();

let login = async () => {
  // e.preventDefault();

  if( username && password){
    console.log('hello');
    push(`/staff/user`);
    alert("try");
    try {
      const res = await api.post("staff/login/", {
        username: username,
        password: password,
      });
      sessionStorage.setItem("access_token", res.data["access_token"]);
      sessionStorage.setItem("refresh_token", res.data["refresh_token"]);
      // const user = res.data["user"];
      // if (user === "admin") {
      //   push(`/admin`);
      // } else {
      //   push(`/staff/${res.data["eid"]}`);
      // }
    } catch (e) {
      alert(e);
    }
  }
 else{
  alert("Please enter your credentials!");
 }
};

export default function Login() {
  return (
    <div>
      <div className="h-96 bg-white w-96 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-around border-2 rounded-2xl border-blue-500 ">
        <h1 className="text-blue-500 text-3xl uppercase">login</h1>
        <input
          className="h-14 w-10/12 px-4 text-black border-2 border-blue-500 rounded-lg"
          placeholder="Username"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input
          className="h-14 w-10/12 px-4 text-black border-2 border-blue-500 rounded-lg"
          placeholder="Password"
          onChange={(e) => {
            setpass(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 px-4 py-2 rounded text-white"
          // type="submit"
          onClick={login}
        >
          Login
        </button>
        <button className="text-blue-500">Forgot Password?</button>
      </div>
    </div>
  );
}

// className="bg-[url('/images/vivid-blurred.jpg')]"
