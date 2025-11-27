// import React from 'react'

import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const UserLayout = () => {
  return (
    <>
      {/* header */}
      <Header />
      {/* main content */}
      <main>
        {/* outlet will replace with appropriate child(Home) */}
        <Outlet />
      </main>
      {/* footer   */}
      <Footer />
    </>
  );
};

export default UserLayout;
