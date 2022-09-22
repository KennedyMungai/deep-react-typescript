import React, { useState } from 'react';


const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState<string>('');

    return (
    <div>UserSearch</div>
    )
}

export default UserSearch;