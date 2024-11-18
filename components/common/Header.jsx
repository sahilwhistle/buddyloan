// LIBS
"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const menuItems = [
    { id: 1, href: "#", icon: "/assets/img/home.png", alt: "Home", label: "Home" , url:'/'}, // need to update this url
    {
      id: 2,
      href: "#",
      icon: "/assets/img/create.png",
      alt: "Create Lead",
      label: "Create Lead",
      url:'/lead'
    },
    {
      id: 3,
      href: "#",
      icon: "/assets/img/earnings.png",
      alt: "My Earnings",
      label: "My Earnings",
      url:'/earnings'
    },
    {
      id: 4,
      href: "#",
      icon: "/assets/img/transections.png",
      alt: "Transactions",
      label: "Transactions",
      url:'/transactions'
    },
    {
      id: 5,
      href: "#",
      icon: "/assets/img/status.png",
      alt: "Loan Status",
      label: "Loan Status",
      url:'/loan-status'
    },
    {
      id: 6,
      href: "#",
      icon: "/assets/img/terms.png",
      alt: "Terms & Conditions",
      label: "Terms & Conditions",
      url:'/term-condition'
    },
    {
      id: 7,
      href: "#",
      icon: "/assets/img/about-us.png",
      alt: "About Us",
      label: "About Us",
      url:'/about-us'
    },
    {
      id: 8,
      href: "#",
      icon: "/assets/img/logout.png",
      alt: "Logout",
      label: "Logout",
      url:'/logout'
    }, // here we have make a function instead of url
  ];

  return (
    <div className="fixed z-[9999] w-full">
      <div className="h-full w-full bg-white">
        <div className="flex justify-between items-center h-16 bg-white px-4 shadow-md">
          <div onClick={toggleSidebar}>
            <img
              src="/assets/img/hum-burger.png"
              className="h-6 w-6 cursor-pointer"
              alt="Hamburger Menu"
            />
          </div>

          <div>
            <img
              src="/assets/img/buddyloan.png"
              className="h-11 w-[110px]"
              alt="BuddyLoan Logo"
            />
          </div>

          <div>
            <img
              src="/assets/img/notification.png"
              className="h-6 w-6"
              alt="Notification"
            />
          </div>
        </div>

        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleSidebar}
        ></div>

        <div
          className={`fixed top-0 left-0 w-64 bg-white h-full transition-transform duration-300 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center p-8">
              <img
                src="/assets/img/profile.png"
                alt="profile Logo"
                className="w-[100.77px] h-[100.77px] rounded-full"
              />
              <h3 className="text-black text-[19.66px] font-medium leading-[30.22px] text-left">
                Name
              </h3>
              <span className="text-[#49B7F2] text-[8.71px] font-medium leading-[13.38px] text-left flex gap-1">
                Update Profile
                <img
                  src="/assets/img/edit.png"
                  alt="Edit"
                  className="w-[10.15px] h-[10.15px]"
                />
              </span>
            </div>

            <ul className="flex flex-col items-stretch overflow-y-auto h-[calc(100vh-200px)]">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="border-t border-gray-300 py-5 px-5 w-full"
                >
                  <Link
                    href={item.url}
                    className="flex items-center text-lg text-gray-800 hover:text-blue-500"
                  >
                    <img
                      src={item.icon}
                      alt={item.alt}
                      className="mr-5 w-6 h-6"
                    />
                    <h3 className="font-poppins text-md font-medium leading-[16.91px] text-left decoration-none">
                      {item.label}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Header