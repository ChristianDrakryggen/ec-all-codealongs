import React from "react";
import Navbar from "./components/Navbar";
import CountStuff from "./components/CountStuff";
import GetData from "./components/GetData";

function App() {
  return (
    <>
      <Navbar
        logo="Navbar"
        links={[
          { name: "link1", url: "https://google.se" },
          { name: "link2", url: "https://facebook.se" },
        ]}
      />
      <h1>Hej och välkommen</h1>

      <CountStuff />
      <GetData />
    </>
  );
}

export default App;
