import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { To, useNavigate } from "react-router-dom";

export interface DrawerProps {
  routes: {
    name: string;
    to: string;
  }[];
}

const DrawerCustom: React.FC<DrawerProps> = ({ routes }) => {
  const [state, setState] = React.useState(false);
  const navigate = useNavigate();

  const handleTabClick = (to: To) => {
    setState(false);
    navigate(to);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

    const list = () => (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {routes.map((route, index) => (
            <ListItem key={route.name} disablePadding>
              <ListItemButton onClick={() => handleTabClick(route.to)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon
          sx={{
            color: "#ffffff",
            fontSize: "32px",
          }}
        />
      </Button>
      <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default DrawerCustom;
