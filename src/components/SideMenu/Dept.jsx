import "./dept.css";

const styles = {
  width: "100%",
  height: "4em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  borderBottom: "2px solid white",
  cursor: "pointer",
};

const Dept = ({ name, setFilter }) => {
  return (
    <div
      className="dept"
      style={styles}
      onClick={() => {
        setFilter(name);
      }}
    >
      {name}
    </div>
  );
};

export default Dept;
