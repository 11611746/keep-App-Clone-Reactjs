import React from "react";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import FormatStrikethroughRoundedIcon from "@material-ui/icons/FormatStrikethroughRounded";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import CheckIcon from "@material-ui/icons/Check";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import Zoom from "@material-ui/core/Zoom";
import { useState } from "react";
import "./index.css";

const Notes = (props) => {
  //strike
  const [strike, updateStrike] = useState(false);
  const Complete = () => {
    updateStrike(true);
  };
  const RemoveComplete = () => {
    updateStrike(false);
  };

  //important
  const [imp, updateImp] = useState(false);
  const Important = () => {
    updateImp(true);
  };
  const RemoveImportant = () => {
    updateImp(false);
  };

  //edit
  const [chars, updateChars] = useState({
    title: props.title,
    note: props.note,
  });

  const InputChar = (event) => {
    const { value, name } = event.target;

    updateChars((oldChar) => {
      return {
        ...oldChar,
        [name]: value,
      };
    });
  };
  const Edit = () => {
    props.edit(props.id, chars);
    updateChars({
      title: props.title,
      note: "",
    });
  };

  //delete
  const NoteDelete = () => {
    props.del(props.id);
  };

  //menu
  const [menu, updateMenu] = useState(false);
  const ShowMenu = () => {
    updateMenu(true);
  };

  const HideMenu = () => {
    updateMenu(false);
  };

  return (
    <>
      <div
        className="col-sm-6 col-md-4 col-lg-3 col-xl-2 border cardHover mb-3"
        style={{
          margin: "0px 8px",
          borderRadius: "10px",
          borderColor: "#e0e0e0",
        }}
      >
        <div
          className="card bg-light border-0"
          onMouseOver={ShowMenu}
          onMouseOut={HideMenu}
        >
          <div
            className="card-header text-center border-0 pt-3 pb-0"
            style={{ background: "#ffffff" }}
          >
            <h5
              className="mb-0"
              style={{
                textDecoration: strike ? "line-through" : "none",
              }}
            >
              {imp ? (
                <LabelImportantOutlinedIcon fontSize="small" className="pb-1" />
              ) : (
                ""
              )}
              {props.title.toUpperCase()}
            </h5>
          </div>
          <div className="card-body pb-0" style={{ background: "#ffffff" }}>
            <p>{props.note}</p>

            <div className={menu ? "row my-2" : "row my-2 d-none"}>
              <div className="col-3 text-center px-0" onClick={NoteDelete}>
                <Tooltip
                  title="Delete Permanently"
                  placement="bottom"
                  arrow
                  TransitionComponent={Zoom}
                >
                  <DeleteOutlineOutlinedIcon fontSize="small" />
                </Tooltip>
              </div>

              <div
                className="col-3 text-center px-0"
                onClick={Complete}
                onDoubleClick={RemoveComplete}
              >
                <Tooltip
                  title="Complete"
                  placement="bottom"
                  arrow
                  TransitionComponent={Zoom}
                >
                  <FormatStrikethroughRoundedIcon fontSize="small" />
                </Tooltip>
              </div>
              <div
                className="col-3 text-center px-0"
                data-toggle="collapse"
                href=".collapseTxtArea"
              >
                <Tooltip
                  title="Edit"
                  placement="bottom"
                  arrow
                  TransitionComponent={Zoom}
                >
                  <EditOutlinedIcon fontSize="small" />
                </Tooltip>
              </div>
              <div
                className="col-3 text-center px-0"
                onClick={Important}
                onDoubleClick={RemoveImportant}
              >
                <Tooltip
                  title="Important"
                  placement="bottom"
                  arrow
                  TransitionComponent={Zoom}
                >
                  <StarBorderOutlinedIcon fontSize="small" />
                </Tooltip>
              </div>

              <div className="col-12 text-center px-0 mt-3">
                <textarea
                  className="col collapse collapseTxtArea rounded border-0 bg-white"
                  style={{
                    borderRadius: "10px",
                    boxShadow:
                      "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 15px 0 rgba(0, 0, 0, 0.12)",
                  }}
                  rows="5"
                  placeholder="Edit note..."
                  name="note"
                  onChange={InputChar}
                  value={chars.note}
                ></textarea>
              </div>
              <div
                className="col text-center collapse collapseTxtArea px-0 mt-1"
                onClick={Edit}
                data-toggle="collapse"
                href=".collapseTxtArea"
              >
                <Tooltip
                  title="Save"
                  placement="bottom"
                  arrow
                  TransitionComponent={Zoom}
                >
                  <CheckIcon />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
