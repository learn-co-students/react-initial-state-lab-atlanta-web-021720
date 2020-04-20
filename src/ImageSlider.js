// your ImageSlider code here!
import React from 'react';

export default class ImageSlider extends React.Component{
    
    constructor() { //props that the component gets from its parent
        super()
        this.state = { //define initial state with a key of 'someKey' set to the 'someValue' prop
          currentSlideIndex: 0
        }
      }


    render(){
        return (
            <div>I am on slide {this.state.currentSlideIndex}</div>
        )
    }

}