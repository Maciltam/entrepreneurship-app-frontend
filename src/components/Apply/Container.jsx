import { useState } from "react";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import ProjectSection from "./ProjectSection";
import CandidateSection from "./CandidateSection";

const emptyApplication = {
  type: "",
  candidate1: {},
  candidate2: {},
  project: {
    shortDesc: "",
    longDesc: "",
  },
};

const styles = {
  container: {
    position: "relative",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    outline: "white 3px solid",
    padding: "3em",
    borderRadius: "1em",
    overflow: "scroll",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

const ApplyForm = () => {
  const [application, setApplication] = useState(emptyApplication);

  return (
    <div style={styles.container}>
      <FormControl style={{ width: "30%" }}>
        <InputLabel>Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={application.type}
          label="Age"
          onChange={(e) => {
            setApplication({ ...application, type: e.target.value });
          }}
        >
          <MenuItem value="monome">Monome</MenuItem>
          <MenuItem value="binome">Binome</MenuItem>
        </Select>
      </FormControl>
      <CandidateSection candidate={1} setApplication={setApplication} />
      {application.type == "binome" && (
        <CandidateSection candidate={2} setApplication={setApplication} />
      )}
      <ProjectSection setApplication={setApplication} />
      <Button color="success">Envoyer</Button>
    </div>
  );
};

export default ApplyForm;
