import { useState, useEffect } from "react";
import { getAllCandidates } from "./utilities/dbInterfaces";
import Nav from "./components/Nav/Container";

import Main from "./components/Main/Container";
import "./App.css";
import { mockupCandidates, departments } from "./assets/mockupCandidates";
import { darkTheme, lightTheme } from "./themes/themes";
import { ThemeProvider } from "@mui/material/styles";

const eltContainerStyle = {
  width: "100vw",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function App() {
  const [filter, setFilter] = useState("Tous les candidats");
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    getAllCandidates().then((result) => {
      setCandidates(result.rows);
    });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <div class="container">
        <div className="nav">
          <Nav setFilter={setFilter} departments={departments} />
        </div>
        <div className="main">
          <Main filter={filter} candidates={candidates} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
