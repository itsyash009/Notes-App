import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Yash Baranwal 2021{year}</p>
    </footer>
  );
}

export default Footer;
