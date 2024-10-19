import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";

import { useState } from "react";

const Login = () => {
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");

  const loginHandler = () => {
    console.log("login");
  };

  return (
    <div className="flex flex-row justify-evenly items-center h-screen">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl">Welcome to TextNCall</h1>
          <code className="text-sm text-zinc-400">
            Effortless Chatting and Video Calling
          </code>
        </div>

        <img className="w-44" src="/meetme.png" alt="" />
      </div>

      <main className="border border-gray-400 p-6 py-10 w-[30%] min-w-72 h-max flex flex-col justify-center gap-6 rounded-lg">
        <h1 className="text-center uppercase font-semibold text-4xl ">Login</h1>

        <div className="flex flex-col">
          <Label>Date of Birth</Label>

          <input
            className="text-black font-medium focus:outline-none bg-gray-100 border p-[12px] mt-2 rounded-lg "
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <Label>Gender</Label>

          <select
            className="text-black font-medium focus:outline-none bg-gray-100 border  p-[12px] mt-2 rounded-lg "
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option className="text-black " value="">
              Select gender
            </option>
            <option className="text-black" value="male">
              Male
            </option>
            <option className="text-black" value="female">
              Female
            </option>
          </select>
        </div>

        <div className="">
          <p className="text-center">Already logged In</p>

          <button
            onClick={loginHandler}
            className="w-full bg-transparent p-[12px] border border-gray-400 hover:border-white hover:bg-inherit mt-4 rounded-lg"
          >
            <FcGoogle className="text-3xl w-full" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
