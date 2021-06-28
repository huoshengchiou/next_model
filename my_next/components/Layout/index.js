import React, { useContext } from "react";
import Head from "./Head";
import Notification from "../Notification";
import NotificaitonContext from "../../store/notificationContext";
import { useRouter, withRouter } from "next/router"; //特定hook或HOC

const Layout = (props) => {
  const { notification } = useContext(NotificaitonContext);
  const router = useRouter(); //可以透過router來切換不同路徑間的主要layout

  // console.log({ router });

  if (router.pathname === "/[pId]") {
    return (
      <>
        special layout
        {props.children}
      </>
    );
  }

  return (
    <>
      <Head />
      <main>{props.children}</main>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
};
export default Layout;
