import React, { useState } from "react";
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import MenuOpenOutlinedIcon from "@material-ui/icons/MenuOpenOutlined";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const SideNavbar = () => {
  const [unhide, updateUnhide] = useState(false);

  const SidebarHide = () => {
    updateUnhide(true);
  };

  const SidebarShow = () => {
    updateUnhide(false);
  };

  return (
    <>
      <div
        className={
          unhide ? "col-sm-1 col-3 mb-4 pr-0" : "col-sm-3 col-lg-2 mb-4 pr-0"
        }
      >
        <div
          className="list-group list-group-flush"
          role="tablist"
          style={{ fontSize: "1.2rem" }}
        >
          <a
            className="list-group-item list-group-item-action active"
            id="list-home-list"
            data-toggle="list"
            href="#list-home"
            role="tab"
            aria-controls="home"
            style={{
              background: "#feefc3",
              color: "#090c15",
              borderRadius: unhide ? "50%" : "0px 25px 25px 0px",
              marginLeft: unhide ? "8px" : "",
              width: unhide ? "50px" : "",
              border: "none",
              fontWeight: "600",
              fontSize: "0.9rem",
              padding: "12px 5px",
            }}
          >
            {unhide ? (
              <div className="row">
                <span style={{ marginLeft: "23px" }}>
                  <Tooltip
                    title="Notes"
                    placement="right"
                    TransitionComponent={Zoom}
                  >
                    <NoteAddOutlinedIcon />
                  </Tooltip>
                </span>
              </div>
            ) : (
              <span>
                <span className="ml-3 mr-5">
                  <NoteAddOutlinedIcon />
                </span>
                <span>Notes</span>
              </span>
            )}
          </a>
          <a
            className="list-group-item list-group-item-action disabled"
            id="list-profile-list"
            data-toggle="list"
            href="#list-profile"
            role="tab"
            aria-controls="profile"
            style={{
              color: "#202124",
              borderRadius: unhide ? "50%" : "0px 25px 25px 0px",
              marginLeft: unhide ? "10px" : "",
              width: unhide ? "50px" : "",
              border: "none",
              fontWeight: "600",
              fontSize: "0.9rem",
              padding: "12px 5px",
            }}
          >
            {unhide ? (
              <div className="row">
                <span style={{ marginLeft: "21px" }}>
                  <Tooltip
                    title="Hide"
                    placement="right"
                    TransitionComponent={Zoom}
                  >
                    <DeleteOutlinedIcon />
                  </Tooltip>
                </span>
              </div>
            ) : (
              <span>
                <span className="ml-3 mr-5">
                  <DeleteOutlinedIcon />
                </span>
                <span>Trash</span>
              </span>
            )}
          </a>
          <a
            className="list-group-item list-group-item-action disabled"
            id="list-messages-list"
            data-toggle="list"
            href="#list-messages"
            role="tab"
            aria-controls="messages"
            style={{
              color: "#202124",
              borderRadius: unhide ? "50%" : "0px 25px 25px 0px",
              marginLeft: unhide ? "10px" : "",
              width: unhide ? "50px" : "",
              border: "none",
              fontWeight: "600",
              fontSize: "0.9rem",
              padding: "12px 5px",
            }}
          >
            {unhide ? (
              <div className="row">
                <span style={{ marginLeft: "21px" }}>
                  <Tooltip
                    title="Hide"
                    placement="right"
                    TransitionComponent={Zoom}
                  >
                    <SettingsOutlinedIcon />
                  </Tooltip>
                </span>
              </div>
            ) : (
              <span>
                <span className="ml-3 mr-5">
                  <SettingsOutlinedIcon />
                </span>
                <span>Setting</span>
              </span>
            )}
          </a>
          <a
            className="list-group-item list-group-item-action disabled"
            id="list-settings-list"
            data-toggle="list"
            href="#list-settings"
            role="tab"
            aria-controls="settings"
            style={{
              color: "#202124",
              borderRadius: unhide ? "50%" : "0px 25px 25px 0px",
              marginLeft: unhide ? "10px" : "",
              width: unhide ? "50px" : "",
              border: "none",
              fontWeight: "600",
              fontSize: "0.9rem",
              padding: "12px 5px",
            }}
          >
            {unhide ? (
              <div className="row">
                <span style={{ marginLeft: "21px" }}>
                  <Tooltip
                    title="Hide"
                    placement="right"
                    TransitionComponent={Zoom}
                  >
                    <Brightness4OutlinedIcon />
                  </Tooltip>
                </span>
              </div>
            ) : (
              <span>
                <span className="ml-3 mr-5">
                  <Brightness4OutlinedIcon />
                </span>
                <span>Dark</span>
              </span>
            )}
          </a>
          <a
            className="list-group-item list-group-item-action"
            id="list-settings-list"
            data-toggle="list"
            href="http://localhost:3000/"
            role="tab"
            aria-controls="settings"
            onClick={SidebarHide}
            onDoubleClick={SidebarShow}
            onTouchStart={SidebarHide}
            onTouchEnd={SidebarShow}
            style={{
              color: "#202124",
              borderRadius: unhide ? "50%" : "0px 25px 25px 0px",
              marginLeft: unhide ? "10px" : "",
              width: unhide ? "50px" : "",
              border: "none",
              fontWeight: "600",
              fontSize: "0.9rem",
              padding: "12px 5px",
              backgroundColor: unhide ? "#feefc3" : "#ffffff",
            }}
          >
            {unhide ? (
              <div className="row">
                <span style={{ marginLeft: "24px" }}>
                  <Tooltip
                    title="Un-Hide"
                    placement="right"
                    TransitionComponent={Zoom}
                  >
                    <KeyboardArrowRightOutlinedIcon />
                  </Tooltip>
                </span>
              </div>
            ) : (
              <span>
                <span className="ml-3 mr-5">
                  <MenuOpenOutlinedIcon />
                </span>
                <span>Hide</span>
              </span>
            )}
          </a>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
