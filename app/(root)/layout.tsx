import MobileNavbar from "@/components/MobileNavbar";
import SideBar from "@/components/SideBar";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  const LoggedIn = data.user;
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
