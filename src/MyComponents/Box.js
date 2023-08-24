import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, moveTask } from "../actions/index";

export default function Box() {
  const [inputData, setinputData] = React.useState("");
  const [showBox, setShowBox] = React.useState(false);

  const openlist = useSelector((state) => state.todoOperations.openlist);
  const inprogress = useSelector((state) => state.todoOperations.inprogress);
  const review = useSelector((state) => state.todoOperations.review);
  const closed = useSelector((state) => state.todoOperations.closed);
  const dispatch = useDispatch();

  // For Current Date
  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const months = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[monthIndex];
  const currDate = month + " " + day;
  //

  const Add = () => {
    setShowBox(true);
  };

  return (
    <>
      <main id="mainb" className="main">
        <div className="container">
          <div className="nav-boxes">
            <span className="box" id="nav-box-1">
              OPEN
            </span>

            {openlist.map((elem) => (
              <div key={elem.id} className="open-task">
                <p style={{ margin: "initial" }}>List</p>
                <div className="task">
                  <div className="head-name" style={{ fontWeight: "bold" }}>
                    <p className="box-paragraph">{elem.data}</p>
                  </div>
                  <div>
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="date">
                  <p>{currDate}</p>
                </div>
                <div className="tasks">
                  <i
                    id="sub-task"
                    className="fa fa-plus"
                    aria-hidden="true"
                  ></i>
                  ADD SUBTASK
                  <div className="dropdown">
                    <button className="dropbtn">MOVE</button>
                    <div className="dropdown-content">
                      <div
                        href="#"
                        onClick={() =>
                          dispatch(moveTask(elem.id, "inprogress", "open"))
                        }
                      >
                        IN PROGRESS
                      </div>
                      <div
                        href="#"
                        onClick={() =>
                          dispatch(moveTask(elem.id, "review", "open"))
                        }
                      >
                        REVIEW
                      </div>
                      <div
                        onClick={() =>
                          dispatch(moveTask(elem.id, "closed", "open"))
                        }
                      >
                        CLOSED
                      </div>
                      <div
                        onClick={() => dispatch(deleteTask(elem.id, "open"))}
                      >
                        DELETE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {showBox && (
              <div className="input-div">
                <input
                  type="text"
                  id="input"
                  placeholder="Task Name"
                  autoComplete="off"
                  value={inputData}
                  onChange={(event) => setinputData(event.target.value)}
                />
                <button
                  id="save-button"
                  onClick={() =>
                    dispatch(
                      addTask(inputData),
                      setShowBox(false),
                      setinputData("")
                    )
                  }
                >
                  SAVE
                </button>
              </div>
            )}

            <span id="newTaskb" className="newTask" onClick={() => Add()}>
              <i id="new-task" className="fa fa-plus" aria-hidden="true"></i>New
              Task
            </span>
          </div>
          <div className="nav-boxes">
            <span className="box" id="nav-box-2">
              IN PROGRESS
            </span>
            {inprogress.map((elem) => (
              <div key={elem.id} className="open-task">
                <p style={{ margin: "initial" }}>List</p>
                <div className="task">
                  <div className="head-name" style={{ fontWeight: "bold" }}>
                    <p className="box-paragraph">{elem.data}</p>
                  </div>
                  <div>
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="date">
                  <p>{currDate}</p>
                </div>
                <div className="tasks">
                  <i
                    id="sub-task"
                    className="fa fa-plus"
                    aria-hidden="true"
                  ></i>
                  ADD SUBTASK
                  <div className="dropdown">
                    <button className="dropbtn">MOVE</button>
                    <div className="dropdown-content">
                      <div
                        href="#"
                        onClick={() =>
                          dispatch(moveTask(elem.id, "open", "inprogress"))
                        }
                      >
                        OPEN
                      </div>
                      <div
                        href="#"
                        onClick={() =>
                          dispatch(moveTask(elem.id, "review", "inprogress"))
                        }
                      >
                        REVIEW
                      </div>
                      <div
                        href="#"
                        onClick={() =>
                          dispatch(moveTask(elem.id, "closed", "inprogress"))
                        }
                      >
                        CLOSED
                      </div>
                      <div
                        href="#"
                        onClick={() =>
                          dispatch(deleteTask(elem.id, "inprogress"))
                        }
                      >
                        DELETE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="nav-boxes">
            <span className="box" id="nav-box-3">
              REVIEW
            </span>
            {review.map((elem) => (
              <div key={elem.id} className="open-task">
                <p style={{ margin: "initial" }}>List</p>
                <div className="task">
                  <div className="head-name" style={{ fontWeight: "bold" }}>
                    <p className="box-paragraph">{elem.data}</p>
                  </div>
                  <div>
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="date">
                  <p>{currDate}</p>
                </div>
                <div className="tasks">
                  <i
                    id="sub-task"
                    className="fa fa-plus"
                    aria-hidden="true"
                  ></i>
                  ADD SUBTASK
                  <div className="dropdown">
                    <button className="dropbtn">MOVE</button>
                    <div className="dropdown-content">
                      <div
                        href="#"
                        onClick={() =>
                          dispatch(moveTask(elem.id, "open", "review"))
                        }
                      >
                        OPEN
                      </div>
                      <div
                        href="#"
                        onClick={() =>
                          dispatch(moveTask(elem.id, "inprogress", "review"))
                        }
                      >
                        IN PROGRESS
                      </div>
                      <div
                        href="#"
                        onClick={() =>
                          dispatch(moveTask(elem.id, "closed", "review"))
                        }
                      >
                        CLOSED
                      </div>
                      <div
                        href="#"
                        onClick={() => dispatch(deleteTask(elem.id, "review"))}
                      >
                        DELETE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="nav-boxes">
            <span className="box" id="nav-box-4">
              CLOSED
            </span>
            {closed.map((elem) => (
              <div key={elem.id} className="open-task">
                <p style={{ margin: "initial" }}>List</p>
                <div className="task">
                  <div className="head-name" style={{ fontWeight: "bold" }}>
                    <p className="box-paragraph">{elem.data}</p>
                  </div>
                  <div>
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="date">
                  <p>{currDate}</p>
                </div>
                <div className="tasks">
                  <i
                    id="sub-task"
                    className="fa fa-plus"
                    aria-hidden="true"
                  ></i>
                  ADD SUBTASK
                  <div className="dropdown">
                    <button className="dropbtn">MOVE</button>
                    <div className="dropdown-content">
                      <div
                        href="#"
                        onClick={() =>
                          dispatch(moveTask(elem.id, "open", "closed"))
                        }
                      >
                        OPEN
                      </div>
                      <div
                        href="#"
                        onClick={() =>
                          dispatch(moveTask(elem.id, "inprogress", "closed"))
                        }
                      >
                        IN PROGRESS
                      </div>
                      <div
                        href="#"
                        onClick={() =>
                          dispatch(moveTask(elem.id, "review", "closed"))
                        }
                      >
                        REVIEW
                      </div>
                      <div
                        href="NULL"
                        onClick={() => dispatch(deleteTask(elem.id, "closed"))}
                      >
                        DELETE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
