import React from "react";
import { useEffect, useState } from "react";

// Styles
import "./App.css";

// Components
import Navigation from "./components/navigation/navigation";
import Select, { ValueOptions } from "./components/select/select";

// Others
import storage from "./helpers/storage";
import { useFetch } from "./hooks/fetcher";
import StoreContext from "./hooks/store";
import { OPTIONS_LIST } from "./constants";

function App({ children }: { children: JSX.Element }) {
  const [selectedOption, setSelectedOption] = useState<ValueOptions>();

  const { fetchData, articles, loading } = useFetch(selectedOption);

  const selectOption = (val: ValueOptions) => {
    setSelectedOption(val);
    storage.set("selectedOption", val);
  };

  useEffect(() => {
    const selectedOption = storage.get("selectedOption") as ValueOptions;
    if (selectedOption) {
      setSelectedOption(selectedOption);
    }

    fetchData(selectedOption, { page: 0 });
  }, []);

  useEffect(() => {
    if (selectedOption) {
      fetchData(selectedOption, { page: 0 });
    }
  }, [selectedOption]);

  return (
    <div className="app">
      <header>
        <div className="container">
          <img src="./logo.svg" />
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

        <StoreContext.Provider
          value={{
            articles,
            loading,
            selectedOption,
            fetch: (page: number) =>
              selectedOption && fetchData(selectedOption, { page }),
          }}
        >
          {children}
        </StoreContext.Provider>
      </main>
    </div>
  );
}

export default App;
