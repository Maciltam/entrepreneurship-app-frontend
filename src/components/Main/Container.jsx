import ShortDesc from "./ShortDesc";
import { useMediaQuery } from "@mui/material";

const Container = ({ candidates, filter }) => {
  const isMobile = useMediaQuery("(orientation: portrait)");

  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90vw",
    padding: isMobile ? "5em" : "5em",
  };

  return (
    <main style={styles}>
      {candidates
        .filter(
          (candidate) =>
            candidate.department == filter || filter == "Tous les candidats",
        )
        .map((candidateData) => (
          <ShortDesc candidateData={candidateData} />
        ))}
    </main>
  );
};
export default Container;
