import React, { useState, useRef, useEffect } from 'react';


const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 20 },
];

const UserSearchWithRef: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();
    const inputRef = useRef<HTMLInputElement | null >(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });

        setUser(foundUser);
    };

    return (
    <div>
        User Search
        <input type="text"  value={name} onChange={(e) => setName(e.target.value)} ref={inputRef} />
        <button onClick={onClick}>Search</button>
        <div className="">
            {user && user.name}
            {user && user.age}
        </div>
    </div>
    )
}

export default UserSearchWithRef;