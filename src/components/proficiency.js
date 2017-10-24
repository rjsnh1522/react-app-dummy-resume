import React, { Component } from 'react';


class Proficiency extends Component {
  constructor() {
    super()
  }


  render(){
    return(
      <div className="item">
          <h3 className="level-title">{this.props.item.name}</h3>
          <div className="level-bar">
              <div className="level-bar-inner" data-level={this.props.item.percent}>
              </div>
          </div>
      </div>

    );
  }
}


export default Proficiency;
