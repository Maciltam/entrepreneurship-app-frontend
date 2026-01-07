import { Drawer } from "@mui/material";
import SideMenu from "../SideMenu/Container";

const FilterDrawer = ({
  drawerVisible,
  handleDrawerClose,
  departments,
  setFilter,
}) => {
  return (
    <Drawer
      open={drawerVisible}
      onClose={handleDrawerClose}
      sx={{ width: 500 }}
    >
      <SideMenu departments={departments} setFilter={setFilter} />
    </Drawer>
  );
};

export default FilterDrawer;
