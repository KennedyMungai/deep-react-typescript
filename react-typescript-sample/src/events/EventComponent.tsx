import React from 'react';


const EventComponent: React.FC = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    }

    const onDragStart = (e:React.ChangeEvent<HTMLDivElement>) => {
        console.log("");
    };
        
    return (
        <div>
            <input type="text" onChange={onChange} />
            <div className="" draggable onDragStart={onDragStart}>
                Drag Me!
            </div>
        </div>
    )
}

export default EventComponent;