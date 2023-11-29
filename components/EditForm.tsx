'use client'
import {FormEvent, useEffect, useState} from "react";
import { makeRequest } from "@/miscelleneous/request";
import {ResponseInterface} from "@/miscelleneous/interfaces";
import {useRouter} from "next/navigation";



export default function EditForm(props:any) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter()


    const [response, setResponse] = useState<ResponseInterface>({});

    useEffect(() => {
        async function getData(){

            try {
                const res = await fetch(`/api/user/${props.id}`, {method: 'GET'})

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const data = await res.json();




                setName(data.name)
                setDescription(data.description)

            } catch (e: any) {
                console.error("Error fetching data", e.message)
            }


        }

        getData()
    }, [])


    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const data = {
            name,
            description,
        };

        const res = await makeRequest(`/api/user/${props.id}`, 'PUT', data);

        if (res.status == 'success'){
            router.push('/')
        }

        setResponse(res);
    }

    return (
        <div>
            {response.status === 'error' ? (
                <div className="alert alert-danger" role="alert">
                    {response.data}
                </div>
            ) : (
                ''
            )}
            <div
                className="card mx-auto my-5"
                style={{ maxWidth: '400px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            >
                <div className="card-header bg-dark text-white">
                    <h5>Edit Data </h5>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">
                                Description
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="form-control"
                                id="description"
                                placeholder="Enter your description"
                            ></textarea>
                        </div>
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="btn btn-dark"
                        >
                            Add Data
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
