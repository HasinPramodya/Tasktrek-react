import React from 'react'
import Todo from "../assets/direct-hit.png";
import "./TaskColumn.css";
export const TaskColumn = ({name,icon}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon"src={icon} alt="to do"/>{name}
    </h2>
    </section>
  )
}
