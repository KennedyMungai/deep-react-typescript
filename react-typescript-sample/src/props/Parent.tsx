import React from 'react';
import { ChildAsFC } from './Child';


const Parent = () => {
  return (
    // <Child color='red' onClick={() => console.log("Clicked!!!")} />
    <ChildAsFC color='blue' onClick={() => console.log("Something something darkside")} />
  )
}

export default Parent;