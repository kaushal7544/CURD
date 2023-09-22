/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState([{
        name: "Kaushal", email: "kaushalvaghela2004@gmail.com", age: "19"
    }])
    useEffect(() => {
        axios.get('http://localhost:3003')
        .then((result) => {setUsers(result.data)
        })
        .catch(err => console.log(err))
    })

const handleDelete = (id) => {
    axios.delete('http://localhost:3003/deleteUser/'+id) 
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

    return (
        <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
            <Link className="btn btn-success" to='/Create'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            users.map((users) => {
                                return <tr>
                                        <td>{users.name}</td>
                                        <td>{users.email}</td>
                                        <td>{users.age}</td>
                                        <td><Link className="btn btn-dark" to={`/Update/${users._id}`}>Update</Link><button className="btn btn-danger"  onClick={(e) => handleDelete(users._id) }>Delete</button></td>
                                    </tr>
                                

                            })

                        }

                    </tbody>
                </table>
                </div>
            </div>
    )
}
export default Users;