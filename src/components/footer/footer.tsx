import React from "react";
import { styled } from "@mui/system";
import { Tab, Tabs } from "@mui/material";
import { NavLink, To, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SettingsIcon from "@mui/icons-material/Settings";

const StyledTabs = styled(Tabs)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;


const Footer = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  const handleTabClick = (to: To) => {
    navigate(to);
  };
  return (
    <StyledTabs
      value={value}
      onChange={handleChange}
      variant="fullWidth"
      indicatorColor="secondary"
      textColor="secondary"
    >
      <Tab
        icon={<HomeIcon />}
        label="Home"
        onClick={() => handleTabClick("/webview")}
        component={NavLink}
        to="/webview"
      />
      <Tab
        icon={<InfoIcon />}
        label="Info"
        onClick={() => handleTabClick("/info")}
        component={NavLink}
        to="/info"
      />
      <Tab
        icon={<ContactMailIcon />}
        label="Contact"
        onClick={() => handleTabClick("/contact")}
        component={NavLink}
        to="/contact"
      />
      <Tab
        icon={<SettingsIcon />}
        label="Settings"
        onClick={() => handleTabClick("/settings")}
        component={NavLink}
        to="/settings"
      />
    </StyledTabs>
  );
};

export default Footer;
