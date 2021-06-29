import { createContext, useContext, useState } from "react";
import { useRouter, withRouter } from "next/router"; //特定hook或HOC

const HelperContext = createContext();

export function HelperContextWrapper({ children }) {
  const [num, setNum] = useState(null);

  let sharedState = {
    num,
    setNum,
    /* whatever you want */
    HelperContext: "test",
  };

  const route = useRouter(); //從route對應不同states?

  return (
    <HelperContext.Provider value={sharedState}>
      {children}
    </HelperContext.Provider>
  );
}

//直接提供fn，減少再引用各支再引用useContext
export function useAppContext() {
  return useContext(HelperContext);
}
