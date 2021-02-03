import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Test from "./Test";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {/* <Test /> */}
      {children}
      <Footer />
    </div>
  );
}
