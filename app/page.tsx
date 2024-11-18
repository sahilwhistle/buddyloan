"use client";
import { useState } from "react";
import Modal from "@/components/common/modal";
import Login from "../components/auth/Login";

export default function Home() {
  return (
    <>
      <Login />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {/* <button
          onClick={openModal}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Open Modal
        </button> */}
      </div>
    </>
  );
}
