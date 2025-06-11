import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

const MASTER_PASSWORD = "RENEGADE91889";
const CLIENT_PASSWORDS: Record<string, string> = {
  "client1": "password1",
  "client2": "password2",
  // Add more clients here
};

export default function ClientLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === MASTER_PASSWORD) {
      navigate("/client-admin");
    } else {
      const clientId = Object.keys(CLIENT_PASSWORDS).find(
        (id) => CLIENT_PASSWORDS[id] === password
      );
      if (clientId) {
        navigate(`/client-page/${clientId}`);
      } else {
        setError("Invalid password. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-6"
      >
        <h1 className="text-2xl font-bold text-center mb-2 font-['Montserrat']">Client Login</h1>
        <input
          type="password"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#188bf6] font-['Poppins']"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
        {error && <div className="text-red-600 text-sm text-center">{error}</div>}
        <Button type="submit" className="w-full bg-[#188bf6] text-white rounded-lg font-semibold font-['Poppins']">Login</Button>
      </form>
    </div>
  );
} 