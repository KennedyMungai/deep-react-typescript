import React, { useState } from 'react';


const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });

        setUser(foundUser);
    };

    return (
    <div>
        User Search
        <input type="text"  value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick}>Search</button>
        <div className="">
            <p>{user && user.name} is {user && user.age}</p>
        </div>
    </div>
    )
}

export default UserSearch;