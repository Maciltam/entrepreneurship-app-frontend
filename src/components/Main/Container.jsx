import ShortDesc from "./ShortDesc";
import { useMediaQuery } from "@mui/material";

const Container = ({ candidates, filter }) => {
  const isMobile = useMediaQuery("(orientation: portrait)");

  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "90%",
    minHeight: "100%",
    paddingTop: isMobile ? "15em" : "10em",
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
