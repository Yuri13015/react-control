import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import "./Form.css";

export default function Form() {
  const [age, setage] = useState();
  const [inputTask, setInputTask] = useState('');
  const [inputage, setInputage] = useState('');

  const [task, setTask] = useState([]);

  const deleteElement = (id) => {
    const newArray = task.filter((item) => {
      return item.id !== id;
    });
    const deletedTask = task.find((task) => task.id === id);
    setTask(newArray);
    setage(age - deletedTask.age);
  };
  const handleForm = (e) => {
    e.preventDefault();
    setTask([
      ...task,
      { myTask: inputTask, age: inputage, id: uuidv4() },
    ]);

    setInputTask("");
    setInputage("");
  };

  const onChangeTask = (e) => {
    setInputTask(e);
  };
  const onChangeage = (e) => {
    setInputage(e);
  };

  return (
    <div className="container-form">
      <h3 className="title-add-task">Inscription</h3>
      <form onSubmit={(e) => handleForm(e)}>
        <label className="label-add-task" htmlFor="myTask">
          Prénom
        </label>
        <input
          onInput={(e) => onChangeTask(e.target.value)}
          value={inputTask}
          className="input-task"
          type="text"
          id="myTask"
          placeholder="prenom "
          required
        />
        <label className="label-add-task" htmlFor="age">
          Age
        </label>
        <input
          onInput={(e) => onChangeage(e.target.value)}
          value={inputage}
          className="input-task"
          type="number"
          name="age"
          id="age"
          placeholder="age"
          required
        />
        <button className="input-valid-task">Ajouter</button>
      </form>
      {task.map((task, index) => {
        return (
          <Task
            myTask={task.myTask}
            age={task.age}
            id={task.id}
            key={index}
            delFunction={deleteElement}
          />
        );
      })}
    </div>
  );
}
