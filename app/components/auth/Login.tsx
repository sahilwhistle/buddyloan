"use client";
import React from "react";
import Input from "../forms/Input";
import Button from "../forms/Button";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(97.08% 43.69% at 57.92% 53.69%, #FFFFFF 0%, #47B6F2 100%)",
      }}
      className="mx-auto max-w-sm min-h-screen  flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 mx-2">
        <div className="flex justify-center my-4 pb-3">
          <Link href={"/"}>
            <Image
              src="https://via.placeholder.com/150x50"
              width={150}
              height={50}
              className={"w-[150px] h-[50px]"}
              alt="icon"
            />
          </Link>
        </div>
        <form>
          <div className="my-3 py-3">
            <Input
              placeholder="Mobile Number"
              value=""
              onChange={(e) => console.log("e++++", e.target.value)}
            />
          </div>
          <div className="my-3 py-3">
            <Input
              placeholder="Enter Your Name"
              value=""
              onChange={() => console.log("")}
            />
          </div>
          <div className="my-3 py-3">
            <Input
              placeholder="Enter OTP"
              value=""
              onChange={() => console.log("")}
            />
          </div>
          <div className="flex justify-center items-center pt-2">
            <Button label="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
