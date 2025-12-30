import { useState } from "react";
import Nav from "./components/Nav/Container";
import Main from "./components/Main/Container";
import SideMenu from "./components/SideMenu/Container";
import "./App.css";
import { mockupCandidates, departments } from "./assets/mockupCandidates";
import { darkTheme, lightTheme } from "./themes/themes";
import { ThemeProvider } from "@mui/material/styles";

const eltContainerStyle = {
  width: "100%",
  height: "100%",
};

function App() {
  const [filter, setFilter] = useState("all");
  const [candidates, setCandidates] = useState(mockupCandidates);

  return (
    <div class="container" style={eltContainerStyle}>
      <div className="nav">
        <Nav />
      </div>
      <div className="side-menu" style={eltContainerStyle}>
        <SideMenu setFilter={setFilter} departments={departments} />
      </div>
      <div className="main" style={eltContainerStyle}>
        <Main filter={filter} candidates={candidates} />
      </div>
    </div>
  );
}

export default App;
