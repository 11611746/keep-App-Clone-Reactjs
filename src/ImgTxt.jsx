import React from "react";
import NoteAddRoundedIcon from "@material-ui/icons/NoteAddRounded";

const ImgTxt = () => {
  return (
    <>
      <div className="container mb-5 mt-5 mt-md-5 mt-lg-4">
        <div className="row mt-5 mt-md-5 mt-lg-4 p-lg-5">
          <div className="col text-center mx-auto mt-5 mt-md-5 mt-lg-4 p-lg-5">
            <NoteAddRoundedIcon
              className="img-txt"
              style={{ fontSize: 100 }}
              color="disabled"
            />
            <p
              className="img-text text-secondary mt-4"
              style={{ fontSize: "1.5rem" }}
            >
              Your notes will appear here
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImgTxt;
