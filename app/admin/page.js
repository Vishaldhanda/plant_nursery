
"use client";
import { useState } from "react";

export default function AdminLogin() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  return (
    <div className="p-10">
      <h1>Admin Login</h1>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} />
      <button>Login</button>
    </div>
  );
}
