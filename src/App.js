import { createContext, useState } from "react";
import "./App.css";
import Gallery from "./Components/Gallery/Gallery";

export const useContextAPI = createContext();

function App() {
  const [value, setValue] = useState(0);

  return (
    <useContextAPI.Provider value={[value, setValue]}>
      <div className="App">
        <Gallery />
      </div>
    </useContextAPI.Provider>
  );
}

export default App;
