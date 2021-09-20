import React from 'react';
import './Header.css';
import Title from './Title';

// function Header({ title="", description="Descripción por defecto" }){

//   return (
//     <header>
//       <h1>{title}</h1>
//       <h3>       
//        {description}
//       </h3>
//     </header>
//   )
// }


function Header(props) {
  console.log(props);

  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);
  // <h1
  //   style={
  //     {
  //       color: props.green ? "green" : "black"
  //     }
  //   }

  // >
  //   {capitalize(props.title)}</h1>

  return (
    <header>
      {/* <h1
        className={`${props.green ? "green-text" : ""}`}
      >
        {capitalize(props.title)}</h1> */}

        <Title title={capitalize(props.title)} />
      <h3>
        {props.description || "Descripción por defecto"}
      </h3>
    </header>
  )
}


export default Header;