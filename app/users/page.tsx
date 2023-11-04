import React from 'react'

interface User {
    id: number;
    name: string;
    email:string
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' })
    const users: User[] = await res.json();

    return (
        <div>
            <div>{new Date().toLocaleTimeString()}</div>
            <h1 className="users">Users</h1>
            <table className='table table-auto'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => <tr key={u.id}>
                        <th>{u.name}</th>
                        <td>{u.email}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>

    )
}

export default UsersPage