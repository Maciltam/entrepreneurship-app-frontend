import { TextField } from "@mui/material";

const styles = {
  width: "80%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
};

const ProjectSection = ({
  handleShortDescriptionChange,
  handleLongDescriptionChange,
}) => {
  return (
    <div style={styles}>
      <TextField
        multiline
        fullWidth
        label="Description courte"
        onChange={(e) => {
          handleShortDescriptionChange(e.target.value);
        }}
      />
      <TextField
        multiline
        fullWidth
        label="Description détaillée"
        helperText="Hello"
        onChange={(e) => {
          handleLongDescriptionChange(e.target.value);
        }}
      />
    </div>
  );
};

export default ProjectSection;
