import { useState } from "react";
import "./App.css";

function App({ children }: { children: JSX.Element }) {
  return <div className="App">{children}</div>;
}

export default App;
