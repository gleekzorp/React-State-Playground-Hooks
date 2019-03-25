import React from "react";
import { NavLink } from "react-router-dom";

function NavigationContainer() {
  return (
    <div className="navigation-wrapper">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/toggle">Toggle</NavLink>
      <NavLink to="/font-sizer">Font Sizer</NavLink>
      <NavLink to="/align">Align</NavLink>
      <NavLink to="/show-hide">Show Hide</NavLink>
      <NavLink to="/clock">Clock</NavLink>
      <NavLink to="/change-color">Change Color</NavLink>
    </div>
  );
}

export default NavigationContainer;
