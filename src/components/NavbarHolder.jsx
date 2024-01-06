import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NavbarHolder = ({ children }) => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log('this is location', location.pathname);
    if (location.pathname.includes('/learn')) {
      setNav(true);
    } else {
      setNav(false);
    }
  }, [location]);

  return <div>{!nav && children}</div>;
};

export default NavbarHolder;
