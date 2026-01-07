import ShortDesc from "./ShortDesc";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  algnSelf: "center",
  justifyContent: "space-around",
  width: "90vw",
  paddingTop: "2em",
};

const Container = ({ candidates, filter }) => {
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
