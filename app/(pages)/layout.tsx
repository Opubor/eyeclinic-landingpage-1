import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden bg-white">
      <Navbar />{" "}
      <div className="pt-44">
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default layout;
