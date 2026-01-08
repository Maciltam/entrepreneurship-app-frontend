import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import ApplyModal from "./ApplyModal";
import FilterDrawer from "./FilterDrawer";
const Nav = ({ departments, setFilter }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalClose = () => {
    setModalVisible(false);
  };
  const handleModalOpen = () => {
    setModalVisible(true);
  };
  const [drawerVisible, setDrawerVisible] = useState(false);
  const handleDrawerClose = () => {
    setDrawerVisible(false);
  };
  const handleDrawerOpen = () => {
    setDrawerVisible(true);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "lightgreen",
          width: "100%",
          height: "4em",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Tooltip title="Filtrer" placement="right">
          <IconButton
            style={{
              marginLeft: "1em",
              color: "black",
              backgroundColor: "white",
            }}
            onClick={handleDrawerOpen}
          >
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Participer" placement="left">
          <IconButton
            style={{
              marginRight: "1em",
              color: "black",
              backgroundColor: "white",
            }}
            onClick={handleModalOpen}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
      </div>
      <ApplyModal
        modalVisible={modalVisible}
        handleModalClose={handleModalClose}
      />
      <FilterDrawer
        drawerVisible={drawerVisible}
        handleDrawerClose={handleDrawerClose}
        departments={departments}
        setFilter={setFilter}
      />
    </>
  );
};

export default Nav;
