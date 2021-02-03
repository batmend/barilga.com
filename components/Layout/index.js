import React from "react";
// import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
// import Test from "./Test";

export default function Layout({ children }) {
  return (
    <div>
      {/* <Header /> */}
      {/* <Test /> */}
      {children}
      <Content />
      <Footer />
    </div>
  );
}
