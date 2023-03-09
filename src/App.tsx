import { useState } from "react";

// Styles
import "./App.css";

// Components
import Navigation from "./components/navigation/navigation";
import Select from "./components/select/select";

function App({ children }: { children: JSX.Element }) {
  return (
    <div className="app">
      <header>
        <div className="container">
          <p>Hacker News</p>
        </div>
      </header>
      <main className="container">
        <div className="navigation-container">
          <Navigation />
          <Select onChange={() => {}} />
        </div>

        {children}
      </main>
    </div>
  );
}

export default App;
