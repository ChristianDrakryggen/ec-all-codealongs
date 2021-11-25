import React from "react";

const Navbar = (props) => {
  console.log(props);

  return (
    <div>
      <h1>{props.logo}</h1>
      {props.links.map((link) => (
        <a href={link.url}>{link.name}</a>
      ))}
    </div>
  );
};

export default Navbar;
