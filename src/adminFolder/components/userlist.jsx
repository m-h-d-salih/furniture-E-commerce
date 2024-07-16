    import React, { useContext } from 'react';
    import { MyContext } from '../../context/cartContext';

    function Userlist() {

    const {userlist}=useContext(MyContext)

    // console.log(userlist);
    return (
        <div className='flex justify-center items-center text-center mt-28 '>
        <table className=''>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Orders</th>
                <th>Cart</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {userlist.map((user) => (
                <tr key={user.id}>
                    {console.log(user)}
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                 <td>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    }

    export default Userlist;
