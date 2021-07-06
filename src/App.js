import { useState, useEffect } from "react";
import "./App.css";
import Logo from "./Logo";
import dontForget from "./dont-forget.png";
import { RiPlayListAddLine, RiEdit2Fill } from "react-icons/ri";
import { MdClear, MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaTrashAlt, FaEdit, FaCheckDouble } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence } from "framer-motion";
const formVariants = {
  enter: {
    x: "-100%",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 500, duration: 0.5 },
      opacity: { duration: 0.5 },
    },
  },
};

const listVariants = {
  enter: {
    scale: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
const forgetVariants = {
  enter: {
    scale: 0,
    opacity: 0,
    rotate: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    rotate: 360,
    transition: {
      duration: 1,
    },
  },
};

const getLocalStorage = () => {
  let docket = localStorage.getItem("MyDocket");
  if (docket) {
    return JSON.parse(localStorage.getItem("MyDocket"));
  } else {
    return [];
  }
};

function App() {
  const [inputText, setInputText] = useState("");
  const [docket, setDocket] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  let dateStr = new Date().toDateString();
  let timeStr = new Date().toLocaleTimeString();
  const [time, setTime] = useState(timeStr);
  const [date, setDate] = useState(dateStr);

  const updateTime = () => {
    dateStr = new Date().toDateString();
    timeStr = new Date().toLocaleTimeString();
    setTime(timeStr);
    setDate(dateStr);
  };

  setInterval(updateTime, 1000);

  /* --- Adding task to the Docket ---*/

  const submitTask = e => {
    e.preventDefault();
    inputText.trim();
    if (!inputText) return;
    else if (inputText && isEditing) {
      setDocket(
        docket.map(task => {
          if (editID === task.id) {
            return { ...task, taskText: inputText, id: uuidv4() };
          }
          return task;
        })
      );

      setEditID(null);
      setIsEditing(false);
    } else {
      setDocket([
        ...docket,
        { id: uuidv4(), taskText: inputText, isDone: false },
      ]);
    }

    setInputText("");
  };
  /* --- Adding docket to the local storage ---*/

  useEffect(() => {
    localStorage.setItem("MyDocket", JSON.stringify(docket));
  }, [docket]);

  /* --- Checking task to done ---*/
  const doneTask = (id, isDone) => {
    setDocket(
      docket.map(task => {
        if (task.id === id) {
          return { ...task, isDone: !isDone };
        }
        return task;
      })
    );
  };
  /* --- Editing task of the Docket ---*/
  const editingTask = id => {
    const specificTask = docket.find(task => task.id === id);
    setIsEditing(true);
    setInputText(specificTask.taskText);
    setEditID(id);
  };

  /* --- Removing task from the Docket ---*/
  const removeTask = id => {
    setDocket(docket.filter(task => task.id !== id));
  };

  /* --- Clearing input box ---*/
  const clearInput = () => {
    setInputText("");
  };

  /* --- Clearing all the tasks of the Docket ---*/
  const clearDocket = () => {
    const confirmMsg = window.confirm("Are you sure?");
    if (confirmMsg) {
      setDocket([]);
    }
  };

  return (
    <div className="app">
      <div className="app__container">
        <header className="app__header">
          <div className="app__dateTimeContainer">
            <span className="app__dateTime app__time">{time}</span>
            <span className="app__dateTime app__date">{date}</span>
          </div>
          <div className="app__logoContainer">
            <Logo></Logo>
          </div>
          <p className="app__sloganText">Highly powered productivity tool</p>
        </header>
        <main className="app__docketContainer">
          <motion.form
            onSubmit={submitTask}
            className="app__inputContainer"
            variants={formVariants}
            initial="enter"
            animate="center"
          >
            <div className="app__inputWrapper">
              <input
                className="app__input"
                placeholder="e.g. Go to gym"
                type="text"
                value={inputText}
                required
                onChange={e => setInputText(e.target.value)}
              />
              {inputText && (
                <MdClear className="app__clear" onClick={clearInput}></MdClear>
              )}
            </div>
            {isEditing ? (
              <button
                className="app__submitBtn app__submitBtn--save"
                type="submit"
              >
                <RiEdit2Fill className="app__iconSave"></RiEdit2Fill> Save Task
              </button>
            ) : (
              <button className="app__submitBtn" type="submit">
                <RiPlayListAddLine className="app__iconAdd"></RiPlayListAddLine>
                Add Task
              </button>
            )}
          </motion.form>
          {docket.length > 0 ? (
            <ul className="app__listContainer">
              <div
                className={isEditing ? "app__overlay" : "app__overlay--hidden"}
              ></div>
              <AnimatePresence>
                {docket.map((task, i) => {
                  const { id, taskText, isDone } = task;
                  return (
                    <motion.li
                      className={
                        isDone ? "app__list app__list--done " : "app__list"
                      }
                      key={id}
                      onDoubleClick={() => doneTask(id, isDone)}
                      variants={listVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      <span onClick={() => doneTask(id, isDone)}>
                        {isDone ? (
                          <FaCheckDouble className="app__iconDone"></FaCheckDouble>
                        ) : (
                          <MdCheckBoxOutlineBlank className="app__iconDone"></MdCheckBoxOutlineBlank>
                        )}
                      </span>
                      <p
                        className={
                          isDone
                            ? "app__taskText app__taskText--done"
                            : "app__taskText"
                        }
                      >
                        {i + 1}. {taskText}
                      </p>
                      <span
                        className={isDone ? "app__editDisabled" : ""}
                        onClick={() => editingTask(id)}
                      >
                        <FaEdit
                          className={
                            isDone
                              ? "app__iconEdit app__iconEdit--disabled"
                              : "app__iconEdit"
                          }
                        ></FaEdit>
                      </span>
                      <span onClick={() => removeTask(id)}>
                        <FaTrashAlt className="app__iconTrash"></FaTrashAlt>
                      </span>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </ul>
          ) : (
            <motion.div
              className="app__dontForget"
              variants={forgetVariants}
              initial="enter"
              animate="center"
            >
              <img src={dontForget} alt="don't forget" />
            </motion.div>
          )}

          {docket.length > 1 && (
            <button
              // disabled={isEditing ? "true" : ""}
              className={
                isEditing
                  ? "app__clearDocket app__clearDocket--disabled"
                  : "app__clearDocket"
              }
              onClick={clearDocket}
            >
              Clear Docket
            </button>
          )}
        </main>

        <div className="bg__verticalLines">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="bg__horizontalLines">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="bg__waveLines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div>
            <small></small>
            <small></small>
            <small></small>
            <small></small>
          </div>
        </div>
        <div className="bg__shapes-1">
          <span></span>
          <span></span>
        </div>
        <div className="bg__shapes-2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="app__noteMsg">
          <p>NOTE: Stores data locally</p>
        </div>
      </div>
    </div>
  );
}

export default App;
