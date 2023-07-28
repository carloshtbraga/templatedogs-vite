import { useState } from "react";
import MyContext from "./MyContext";
import PropTypes from "prop-types";

const MyContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true);
    console.log(isDarkMode);
  };

  const tudo = {
    isDarkMode,
    toggleDarkMode,
    setIsDarkMode,
  }

  return (
    <MyContext.Provider value={(tudo)}>
      {children}
    </MyContext.Provider>
  );
};

MyContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyContextProvider;
