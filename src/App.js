import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import CreateNotes from "./CreateNotes";
import Notes from "./Notes";
import SideNavbar from "./SideNavbar";
import ImgTxt from "./ImgTxt";

function App() {
  const [note, updateNote] = useState([]);

  const [img, updateImg] = useState(true);

  const checkImg = () => {
    updateImg(false);
  };

  const checkImgDel = (val) => {
    val === 1 ? updateImg(true) : updateImg(false);
  };

  const addNote = (data) => {
    updateNote((oldNotes) => {
      return [...oldNotes, data];
    });
    checkImg();
  };

  const deleteNote = (id) => {
    updateNote((oldNotes) => {
      checkImgDel(oldNotes.length);
      return oldNotes.filter((value, index) => {
        return index !== id;
      });
    });
  };

  const editNote = (id, data) => {
    //alert(id + " " + data.title + " " + data.note);
    updateNote((oldNotes) => {
      return oldNotes.filter((value, index) => {
        return index !== id;
      });
    });
    addNote(data);
  };

  const columnList = (data) => {
    return data
      ? "col p-1 my-3 my-sm-3 my-md-4"
      : "col-sm-6 col-md-4 col-lg-3 col-xl-3 p-1 my-3 my-sm-3 my-md-4";
  };

  return (
    <>
      <Header colList={columnList} />
      <div className="container-fluid pl-0">
        <div className="row justify-content-center">
          <SideNavbar />

          <div className="col-md-9 col-9 mx-auto">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="list-home"
                role="tabpanel"
                aria-labelledby="list-home-list"
              >
                <CreateNotes sendNote={addNote} />
                <div className="container">
                  <div className="row justify-content-center">
                    {note.map((value, index) => {
                      return (
                        <Notes
                          key={index}
                          id={index}
                          title={value.title}
                          note={value.note}
                          del={deleteNote}
                          edit={editNote}
                        />
                      );
                    })}
                  </div>
                </div>
                {img ? <ImgTxt /> : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
