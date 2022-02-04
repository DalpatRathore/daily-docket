import { useState, useEffect } from "react";
import "./App.css";
import Logo from "./Logo";
// import dontForget from "./dont-forget.png";
import { RiPlayListAddLine, RiEdit2Fill } from "react-icons/ri";
import { MdClear, MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaTrashAlt, FaEdit, FaCheckDouble } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence } from "framer-motion";
import addAlert from "./audios/add-alert.wav";
import doneAlert from "./audios/done-alert.wav";
import deleteAlert from "./audios/delete-alert.wav";

const timeDateVariants = {
  enter: {
    scale: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const sloganVariants = {
  enter: {
    x: "-80vw",
    opacity: "0",
  },
  center: {
    x: "0",
    opacity: "1",
    transition: {
      x: { type: "spring", bounce: 0.5, duration: 3, delay: 5 },
      opacity: { duration: 0.1, delay: 5 },
    },
  },
};

const formVariants = {
  enter: {
    x: "-100%",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, duration: 1 },
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
const taskAdded = new Audio(addAlert);
const taskDone = new Audio(doneAlert);
const taskDeleted = new Audio(deleteAlert);

function App() {
  const [inputText, setInputText] = useState("");
  const [docket, setDocket] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const optionsDate = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "2-digit",
  };

  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const dateStr = new Date().toLocaleDateString("en-US", optionsDate);
  const timeStr = new Date().toLocaleTimeString("en-US", optionsTime);
  const [time, setTime] = useState(timeStr);
  const [date, setDate] = useState(dateStr);

  const updateTime = () => {
    const dateStr = new Date().toLocaleDateString("en-US", optionsDate);
    const timeStr = new Date().toLocaleTimeString("en-US", optionsTime);
    setTime(timeStr);
    setDate(dateStr);
  };

  setInterval(updateTime, 1000);

  /* --- Sound alert function ---*/

  const playSound = audioFile => {
    audioFile.play();
  };

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
      playSound(taskAdded);
    } else {
      setDocket([
        ...docket,
        { id: uuidv4(), taskText: inputText, isDone: false },
      ]);
      playSound(taskAdded);
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
    playSound(taskDone);
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
    playSound(taskDeleted);
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
          <div className="app__logoContainer">
            <Logo></Logo>
          </div>
          <div className="app__sloganDateWrapper">
            <motion.div
              className="app__dateTimeContainer"
              variants={timeDateVariants}
              initial="enter"
              animate="center"
            >
              <span className="app__dateTime app__time">{time}</span>
              <span className="app__dateTime app__date">{date}</span>
            </motion.div>
            <motion.p
              className="app__sloganText"
              variants={sloganVariants}
              initial="enter"
              animate="center"
            >
              The Best Productivity Tool
            </motion.p>
          </div>
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
                        <small>{i + 1}.</small> {taskText}
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
              <img src="/images/dont-forget.png" alt="don't forget" />
            </motion.div>
          )}

          {docket.length > 1 && (
            <button
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
        <div className="app__noteMsg">
          <p>NOTE: App store's data locally.</p>
        </div>

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
      </div>
    </div>
  );
}

export default App;
