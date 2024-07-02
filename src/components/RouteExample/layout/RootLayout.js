import React from "react";
import Mainnavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Mainnavigation />
      {/* RootLayout의 children들이 Outlet으로 렌더링됨 */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
