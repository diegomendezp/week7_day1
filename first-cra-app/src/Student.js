import React from 'react';
import Button from './Button';
import "./Student.css";

function Student(props) {

  return (
    <article
      className={`${props.surveyDone ? "green-card" : "red-card"} student-card`}
    >
      <h2>Estudiante {props.name} – {props.age} años</h2>
      <img src={props.image} alt="student-img" />
      <p>Cohort: {props.cohort}</p>
      <Button
        link={props.link}
        newTab={true}
        name={props.name}
      />
    </article>
  )
}

export default Student;