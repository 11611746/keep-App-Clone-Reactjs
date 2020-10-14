import React, { useState } from "react";
import NotesRoundedIcon from "@material-ui/icons/NotesRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NoteAddRoundedIcon from "@material-ui/icons/NoteAddRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const Header = (props) => {
  const [grid, updateGrid] = useState(false);

  const GridShow = () => {
    updateGrid(true);
    props.colList(true);
  };

  const GridOff = () => {
    updateGrid(false);
    props.colList(false);
  };
  return (
    <>
      <nav className="navbar navbar-light bg-white border-bottom mb-2 py-1 px-4">
        <a href="http://localhost:3000/" className="navbar-brand">
          <NotesRoundedIcon fontSize="inherit" />
          <span className="text-warning ml-2 mr-1">
            <NoteAddRoundedIcon fontSize="large" />
          </span>
          <span
            className="lead"
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              color: "#5f6368",
            }}
          >
            KeepApp
          </span>
        </a>
        <span className="text-dark">
          <span className="mx-3" onClick={GridShow} onDoubleClick={GridOff}>
            {grid ? (
              <Tooltip title="List" placement="left" TransitionComponent={Zoom}>
                <DnsRoundedIcon color="disabled" />
              </Tooltip>
            ) : (
              <Tooltip title="Grid" placement="left" TransitionComponent={Zoom}>
                <AppsRoundedIcon color="disabled" />
              </Tooltip>
            )}
          </span>

          <AccountCircleIcon fontSize="large" />
        </span>
      </nav>
    </>
  );
};

export default Header;
