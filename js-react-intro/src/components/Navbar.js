import React from "react";

const Navbar = (kaffe) => {
  console.log(kaffe);

  return (
    <div>
      <h1>{kaffe.logo}</h1>
      {kaffe.links.map((link) => (
        <a href={link.url}>{link.name}</a>
      ))}
    </div>
  );
};

export default Navbar;
