import { TextField } from "@mui/material";

const styles = {
  width: "80%",
  display: "flex",
  flexDirection: "column",
  minHeight: "10em",
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
        maxRows={3}
        fullWidth
        label="Description courte"
        onChange={(e) => {
          handleShortDescriptionChange(e.target.value);
        }}
        sx={{ mb: "1.5em" }}
      />
      <TextField
        multiline
        maxRows={3}
        fullWidth
        label="Description détaillée"
        onChange={(e) => {
          handleLongDescriptionChange(e.target.value);
        }}
      />
    </div>
  );
};

export default ProjectSection;
