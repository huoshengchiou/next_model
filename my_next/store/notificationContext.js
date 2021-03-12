import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: () => {},
  hideNotification: () => {},
});

export const NotificationProvider = (props) => {
  const [notification, setNotification] = useState(null);
  useEffect(() => {
    if (!notification) return;
    if (notification.status === "success" || notification.status === "error") {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);
  const showNotification = (data) => setNotification(data);
  const hideNotification = (data) => setNotification(null);
  const context = {
    notification,
    showNotification,
    hideNotification,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
