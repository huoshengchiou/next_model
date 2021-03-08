import React from "react";
import Head from "./Head";

const Layout = (props) => {
  return (
    <>
      <Head />
      <main>{props.children}</main>
    </>
  );
};
export default Layout;
