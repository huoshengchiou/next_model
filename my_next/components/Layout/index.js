import React, { useContext } from "react";
import Head from "./Head";
import Notification from "../Notification";
import NotificaitonContext from "../../store/notificationContext";

const Layout = (props) => {
  const { notification } = useContext(NotificaitonContext);

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
