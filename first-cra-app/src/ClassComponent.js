import React from 'react';

class ClassComponent extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    console.log(this.props);
    const { text } = this.props;
    return <h2>{text}</h2>
  }
}

export default ClassComponent;