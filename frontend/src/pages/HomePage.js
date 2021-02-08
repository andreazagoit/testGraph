import React from "react";
import { Navbar } from "../components/Navbar";
import { Dashboard } from "../components/Dashboard";

export const HomePage = () => {
  return (
    <div className="homePage">
      <Navbar />
      <Dashboard />
    </div>
  );
};
