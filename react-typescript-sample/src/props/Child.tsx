import React from 'react';


interface ChildProps {
    color: string;
};

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
        {color}
        <button onClick={onClick}>Click Me!</button>
    </div>
  )
}

export const ChildAsFC:React.FC<ChildProps> = ({color, onClick}:ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click Me!</button> 
    </div>
};