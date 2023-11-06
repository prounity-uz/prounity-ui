import "./App.css";

import { MyComponent, defineCustomElements } from "@prounity/ui";
defineCustomElements();

function App() {
  return (
    <>
      <MyComponent first="Your" last="Name" />
    </>
  );
}

export default App;
