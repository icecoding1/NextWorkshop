import React from 'react'
import Axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function getData({ users }) {

    //const router = useRouter()
    // const deleteUser = (id) => {
    //     Axios
    //     .delete('http://localhost:8080/users/' + id)
    //     .then(function (response) {
    //       console.log(response);
    //       router.push('/getData');
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    //   }

    return (
        <div>
            <table id="example2" className="table table-bordered table-hover" border="1">
                <thead>
                    <tr>
                        <th className="text-center">Id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>userName</th>
                        <th className="text-center">Edit</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((data, id) => (
                        <tr key={data.id}>
                            <td className="text-center">{data.id}</td>
                            <td>{data.Fname}</td>
                            <td>{data.Lname}</td>
                            <td>{data.Username}</td>
                            <td className="text-center"><Link href={`/users/edit/${data.id}`}><a className="btn btn-warning btn-sm">แก้ไข</a></Link></td>
                            <td className="text-center"><button type="button" className="btn btn-danger btn-sm" onClick={() => { deleteUser(data.id) }}>ลบ</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export const getServerSideProps = async () => {
    const res = await Axios.get("http://localhost:8080/users");
    const data = res.data;
    return {
        props: { users: data }
    }
}