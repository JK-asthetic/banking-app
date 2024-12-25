import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggin = {
    firstName: "Jatin",
    lastName: "Khetan",
    email: "khetanjatin12@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggin?.firstName || "Guest"}
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
};

export default Home;
