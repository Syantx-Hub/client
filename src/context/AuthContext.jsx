import React, { createContext, useState } from "react";

export const authContext = createContext(null);

const AuthContextProvider = (props) => {
  const [message, setMessage] = useState("Success");
  return (
    <authContext.Provider value={{ message }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
