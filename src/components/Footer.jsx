import React from 'react';


const Footer = () => (
  <footer>
    &copy;&nbsp;
    {
         (new Date()).getFullYear()
        }
  </footer>
);

export default Footer;
