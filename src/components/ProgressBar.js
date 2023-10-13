import ProgressBar from 'react-bootstrap/ProgressBar';


import React, { Component } from 'react'
export class ProgressB extends Component {
    constructor(){
        super();
        this.state={value:10,display:true}
        
    }
  render() {
    this.setState({value:50})
    this.setState({value:80})
    this.setState({value:100})
    if(this.state.value !== 100){
      this.setState({display:false})
    }
    return (
      <ProgressBar animated now={this.state.value}/>
    )
  }
}

export default ProgressB