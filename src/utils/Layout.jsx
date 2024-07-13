import React from 'react';
import Footer from '../footer/Footer'; // Pretpostavljamo da već imaš Footer komponentu

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
