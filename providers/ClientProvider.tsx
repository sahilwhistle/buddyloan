"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Header from "@/components/common/Header";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [hideNavbar, sethideNavbar] = useState(false);
  let pathName = usePathname();
  const hideNavbarPath = ["/"];
  useEffect(() => {
    if (hideNavbarPath.includes(pathName)) {
      sethideNavbar(true);
    }
  }, [pathName]);

  return (
    <>
      {!hideNavbar && <Header />}
      {children}
    </>
  );
};

export default ClientProvider;
