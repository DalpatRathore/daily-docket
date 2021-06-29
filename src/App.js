import "./App.css";
import Logo from "./Logo";

import { RiPlayListAddLine } from "react-icons/ri";
import { MdClear } from "react-icons/md";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <header className="app__header">
          <div className="app__logoContainer">
            <Logo></Logo>
          </div>
        </header>
        <main className="app__docketContainer">
          <div className="app__inputContainer">
            <div className="app__inputWrapper">
              <input
                className="app__input"
                placeholder="e.g. Go to gym"
                type="text"
              />
              <MdClear className="app__clear"></MdClear>
            </div>
            <button className="app__add" type="submit">
              <RiPlayListAddLine className="app__iconAdd"></RiPlayListAddLine>
              Add
            </button>
          </div>
          <ul className="app__listContainer">
            <li className="app__list">
              <span>
                <input type="checkbox" />
              </span>
              <p className="app__docketText">1. Go to gym</p>
              <span className="app__iconEdit">
                <FaEdit></FaEdit>
              </span>
              <span>
                <FaTrashAlt className="app__iconTrash"></FaTrashAlt>
              </span>
            </li>
            <li className="app__list">
              <span>
                <input type="checkbox" checked="true" />
              </span>
              <p className="app__docketText app__docketText--done">
                2. Go to gym
              </p>
              <span className="app__iconEdit app__iconEdit--disabled">
                <FaEdit></FaEdit>
              </span>
              <span>
                <FaTrashAlt className="app__iconTrash"></FaTrashAlt>
              </span>
            </li>
          </ul>
          <button className="app__clearDocket">Clear Docket</button>
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
      </div>
    </div>
  );
}

export default App;
