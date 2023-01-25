import React from 'react';

export const navbarContext = React.createContext();

function NavbarContextProvider({ children }) {
  const [isActive, setIsActive] = React.useState(false);

  const handleNav = () => {
    setIsActive((prev) => !prev);
    document.body.style.overflow = isActive ? 'auto' : 'hidden';
  };

  return (
    <navbarContext.Provider value={{ isActive, handleNav }}>
      {children}
    </navbarContext.Provider>
  );
}

export default NavbarContextProvider;
