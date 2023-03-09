import { useEffect, useState } from "react";

// Styles
import "./App.css";

// Components
import Navigation from "./components/navigation/navigation";
import Select, { ValueOptions } from "./components/select/select";
import { OPTIONS_LIST } from "./constants";
import storage from "./helpers/storage";

function App({ children }: { children: JSX.Element }) {
  const [selectedOption, setSelectedOption] = useState<ValueOptions>();

  const selectOption = (val: ValueOptions) => {
    setSelectedOption(val);
    storage.set("selectedOption", val);
  };

  useEffect(() => {
    const selectedOption = storage.get("selectedOption") as ValueOptions;
    if (selectedOption) {
      setSelectedOption(selectedOption);
    }
  }, []);

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
          <Select
            onChange={(val) => selectOption(val)}
            options={OPTIONS_LIST}
            value={selectedOption}
          />
        </div>

        {children}
      </main>
    </div>
  );
}

export default App;
