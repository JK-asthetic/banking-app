import { signOut } from "@/lib/actions/user.action";
import Image from "next/image";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
    const handleLogout = async() =>{
        await signOut();
    }
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer-name_mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user.email[0]}</p>
      </div>
      <div
        className={type === "mobile" ? "footer-email_mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate font-semibold">{user.email}</h1>
        <p className="text-14 truncate font-normal text-gray-600">
            {user.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogout}>
        <Image src="icons/logout.svg" fill alt="JSM"/>
      </div>
    </footer>
  );
};

export default Footer;
