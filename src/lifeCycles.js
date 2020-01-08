import React, { Component } from 'react'

export default class LifeCycles extends Component {
  constructor(){
      super();
      console.log("constructor!!")
  }
  componentDidMount(){
      console.log("commponent did mount!!!")
  }

  componentDidUpdate(){
      console.log("component did update")
  }
  shouldComponentUpdate(nextProps,nextState){
      console.log('shoud Component Update',nextProps);
      return nextProps.text!==this.props.text;
  }

  componentWillUnmount(){
      console.log("component will unmount")
  }
  render() {
      console.log("render lifeCycle component!!!")
    return (
        <div>
            <h1>{this.props.text}</h1>
        </div>
    )
  }
}
