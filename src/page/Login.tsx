import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";

import { useState } from "react";
import { useLoginMutation } from "@/redux/api/userAPI";
import { toast } from "sonner";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { MessageResponse } from "@/types/apiType";

const Login = () => {
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");

  const [login] = useLoginMutation();

  const loginHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      const res = await login({
        name: user.displayName!,
        email: user.email!,
        photo: user.photoURL!,
        gender,
        role: "user",
        dob: date,
        _id: user.uid,
      });

      if ("data" in res) {
        toast.success(res.data!.message, {
          style: {
            backgroundColor: "inherit",
            color: "white",
          },
        });
      } else {
        const error = res.error as FetchBaseQueryError;
        const message = (error.data as MessageResponse).message;

        toast.error(message, {
          style: { backgroundColor: "inherit", color: "white" },
        });
      }

      setDate("");
      setGender("");
    } catch (error) {
      toast.error("SignIN failed", {
        style: { backgroundColor: "inherit", color: "white" },
      });
    }
  };

  return (
    <div className="flex flex-row justify-evenly items-center h-screen">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl">Welcome to TextNCall</h1>
          <code className="text-sm text-zinc-400">Your Communication Hub</code>
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
