import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Requests from "./Helpers/Requests";
import Results from "./Components/Results/Results"

function App() {
  const [selectedOption, setSelectedOption] = useState(Requests.fetchTrending);
  // console.log(selectedOption);
  return (
    <div className="app">
      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;