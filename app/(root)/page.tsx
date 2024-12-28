import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { createClient } from "@/utils/supabase/server";
import { console } from "inspector";
import { redirect, RedirectType } from "next/navigation";
import React, { use } from "react";

async function Home() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();


  const loggin = data.user;
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggin?.user_metadata.first_name || "Guest"}
            subtext="Access and manage your bankAccount here"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={100}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggin} transactions={[]} banks={[{}, {}]} />
    </section>
  );
}

export default Home;
