import './App.css';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import Header from './Header';
import Student from './Student'

function App() {

  return (
    <div className="App">
      {/* <FunctionalComponent ></FunctionalComponent>
      <ClassComponent /> */}
      {/* <FunctionalComponent /> */}
      <ClassComponent text="Componente de clase 💆‍♂️" />
      <Header title="home page" description="Descripción 1" />
      <Header title="second page" green={true} />

      <section className="students-container">
        <Student
          age={Math.floor(Math.random() * 45)}
          surveyDone={false}
          name="Diego Méndez"
          cohort="WEB 08/21"
          image="https://picsum.photos/200/300"
          link="https://reactjs.org/" />
        <Student
          age={Math.floor(Math.random() * 45)}
          surveyDone={true} name="Germán Álvarez 🙌" cohort="WEB LEAD" image="data:image/jpeg;base64,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" link="https://germanalvarez.net/" />
      </section>
    </div>
  );
}

// React.createElement('div', null, React.createElement('div',  {className: 'App' }))...

export default App;