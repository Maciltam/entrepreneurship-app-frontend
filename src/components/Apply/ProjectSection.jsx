import { TextField } from "@mui/material";

const styles = {
  width: "80%",
  minHeight: "10em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
};

const ProjectSection = ({ setApplication }) => {
  return (
    <div style={styles}>
      <TextField
        multiline
        fullWidth
        label="Description courte"
        maxRows={2}
        onChange={(e) => {
          setApplication((prevState) => {
            const { project } = prevState;
            project.shortDesc = e.target.value;
            const newState = { ...prevState, project };
            return newState;
          });
        }}
      />
      <TextField
        multiline
        fullWidth
        label="Description détaillée"
        maxRows={2}
        onChange={(e) => {
          setApplication((prevState) => {
            const { project } = prevState;
            project.longDesc = e.target.value;
            const newState = { ...prevState, project };
            return newState;
          });
        }}
      />
    </div>
  );
};

export default ProjectSection;
