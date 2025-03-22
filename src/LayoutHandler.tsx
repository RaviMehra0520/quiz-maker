import React from "react";
import { Outlet } from "react-router";

const LayoutHandler: React.FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default LayoutHandler;
