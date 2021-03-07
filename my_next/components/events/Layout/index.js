import React from "react";
import Head from "./Head";

export const Layout = (props) => {
  return (
    <>
      <Head />
      <main>{props.children}</main>
    </>
  );
};
