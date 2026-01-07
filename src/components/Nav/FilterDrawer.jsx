import { Drawer } from "@mui/material";
import SideMenu from "../SideMenu/Container";
import { useMediaQuery } from "@mui/material";

const FilterDrawer = ({
  drawerVisible,
  handleDrawerClose,
  departments,
  setFilter,
}) => {
  const isMobile = useMediaQuery("(orientation: portrait)");
  return (
    <Drawer
      open={drawerVisible}
      onClose={handleDrawerClose}
      sx={{
        width: isMobile ? "90vw" : 400, // Set your desired width here
        "& .MuiDrawer-paper": {
          width: isMobile ? "90vw" : 400, // Ensure the drawer paper matches the width
        },
      }}
    >
      <SideMenu departments={departments} setFilter={setFilter} />
    </Drawer>
  );
};

export default FilterDrawer;
