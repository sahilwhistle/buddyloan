import UserList from "../components/users/userlist";
import React from "react";

export default function Home(){
    return(
        <>
        <div className="max-w-sm mx-auto">
          <UserList/>
        </div>
        </>
    )
}