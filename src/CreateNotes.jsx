import React from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { useState } from "react";
import "./index.css";

const CreateNotes = (props) => {
  const [chars, updateChars] = useState({
    title: "",
    note: "",
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

  const InsertNote = (event) => {
    event.preventDefault();
    props.sendNote(chars);
    updateChars({
      title: "",
      note: "",
    });
  };

  return (
    <>
      <div className="row mt-4 p-0">
        <div className="col-xl-7 col-lg-7 col-sm-10 col-12 mx-auto mb-5">
          <form
            className="card card-body p-1"
            style={{
              borderRadius: "9px",
              boxShadow:
                "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 15px 0 rgba(0, 0, 0, 0.12)",
            }}
          >
            <input
              className="form-control border-0 m-0 py-0"
              type="text"
              data-toggle="collapse"
              href=".collapseExample"
              placeholder="Title"
              autoComplete="off"
              name="title"
              onChange={InputChar}
              value={chars.title}
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                outline: "0 none",
              }}
            />
            <textarea
              className="collapse form-control mt-2 collapseExample border-0"
              rows="3"
              placeholder="Write a note..."
              name="note"
              onChange={InputChar}
              value={chars.note}
              style={{
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            ></textarea>
            <button
              className="collapse btn btn-warning mt-3 shadow p-0 text-light collapseExample"
              onClick={InsertNote}
              data-toggle="collapse"
              href=".collapseExample"
              style={{
                width: "38px",
                height: "70px",
                borderRadius: "50%",
                position: "absolute",
                bottom: "-18px",
                right: "25px",
              }}
            >
              <AddRoundedIcon fontSize="large" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNotes;
