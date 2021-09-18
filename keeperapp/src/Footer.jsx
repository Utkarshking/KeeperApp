import React from "react"
function Footer(){
  var year=new Date().getFullYear();
  // console.log(year);
  return <footer>
    <p>copyright {year}</p>
  </footer>;
}
export default Footer;