'use client'
import {FaPencil} from "react-icons/fa6";
import {FaTrash} from "react-icons/fa";
import {useEffect, useState} from "react";
import {makeRequest} from "@/miscelleneous/request";
import User from "@/miscelleneous/interfaces";
import Link from "next/link";

export default function Table() {
    const [apiData, setApiData] = useState<User[]>([])




    useEffect(() => {
        async function getData(){
            const res = await makeRequest('/api/user', 'GET', {});

            setApiData(res);
        }

        getData()
    }, [])




    return (
        <div className="card m-4">
            {apiData && apiData.length > 0 ? <div className="card-body">

                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {apiData.map((item) =>(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.description}</td>
                                <td>
                                    <Link href={`/update/${item.id}`} className='btn btn-sm btn-success mx-2'>
                                        <FaPencil/>
                                    </Link>
                                    <button  onClick={async (e) => {
                                        await makeRequest(`/api/user/${item.id}`, 'DELETE', {})
                                        setApiData((prevData) => prevData.filter((item2) => item2.id !== item.id));
                                    }} className='btn btn-sm btn-danger'>
                                        <FaTrash/>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>

            </div> : <h1 className='text-center'>Site Has No Data</h1> }

        </div>
    )

}