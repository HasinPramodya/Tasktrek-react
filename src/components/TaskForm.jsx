import React from "react";
import "./TaskForm.css";
import { Tag } from "./Tag";

export const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter your task"
        ></input>
        <div className="task_form_bottom_line">
          <div>
            <Tag tagname="HTML"/>
            <Tag tagname="CSS"/>
            <Tag tagname="JS"/>
            <Tag tagname="React"/>
          </div>

          <div>
            <select className="task_status">
              <option value="new">To do</option>
              <option value="in_progress">Doing</option>
              <option value="completed">Done</option>
            </select>
          </div>
          <button type="submit" className="task_submit">
            + Add task
          </button>
        </div>
      </form>
    </header>
  );
};
