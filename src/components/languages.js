import React, { Component } from 'react';


class Language extends Component {
  constructor() {
    super()
  }


  render(){
    return(

      <li>{this.props.item.name} <span className="lang-desc">({this.props.item.name})</span>

      </li>



    );
  }
}


export default Language;
