import MobileNavbar from "@/components/MobileNavbar";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LoggedIn = { firstName: "Jatin", lastName: "Khetan" };
  return (
    <main className="flex h-screen w-full font-inter ">
      <SideBar user={LoggedIn} />

      {/* This is for the mobile view */}
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
          <div>
            <MobileNavbar user={LoggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
