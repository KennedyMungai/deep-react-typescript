import React, { useState } from 'react';


const GuestList: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [guests, setGuests] = useState<string[]>([]);

    return (
        <>
            <h3>Guest List</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <button onClick={}>Add Guest</button>
        </>
    )
}

export default GuestList;