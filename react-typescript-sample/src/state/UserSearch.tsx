import React, { useState } from 'react';


const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState<string>('');

    return (
    <div>
        User Search
        <input type="text"  value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick}>Search</button>
    </div>
    )
}

export default UserSearch;