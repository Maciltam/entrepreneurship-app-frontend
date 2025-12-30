import Dept from "./Dept";

const styles = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  borderRight: "3px solid white",
};

const SideMenu = ({ departments, setFilter }) => {
  return (
    <div style={styles}>
      {["Tous les candidats", ...departments].map((elt, index) => (
        <Dept name={elt} setFilter={setFilter} key={index} />
      ))}
    </div>
  );
};

export default SideMenu;
